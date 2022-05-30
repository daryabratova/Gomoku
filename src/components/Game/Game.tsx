import React, { useState } from "react";

import { History, Color } from "../../types/game";
import GameContext from "../../contexts/game";

import Mobile from "../GameMobile";
import Desktop from "../GameDesktop";

const Game: React.FC = () => {
  const [history, setHistory] = useState<History>([]);

  const [win, setWin] = useState<null | {
    color: Color;
    coordinates: string[];
  }>(null);

  const lastSnapshot = history[history.length - 1] || {};
  const turn: Color = history.length % 2 ? "white" : "black";

  const checkWinning = (x: number, y: number) => {
    const checkDirection = (
      direction: "horizontal" | "vertical" | "diagonalUp" | "diagonalDown"
    ) => {
      const offsets = {
        horizontal: [
          { x: -1, y: 0 },
          { x: 1, y: 0 },
        ],
        vertical: [
          { x: 0, y: -1 },
          { x: 0, y: 1 },
        ],
        diagonalUp: [
          { x: 1, y: 1 },
          { x: -1, y: -1 },
        ],
        diagonalDown: [
          { x: -1, y: 1 },
          { x: 1, y: -1 },
        ],
      };

      let count = 1;

      const coordinates = `${x}:${y}`;
      let trace = [coordinates];

      offsets[direction].forEach((offset) => {
        let i = 1;

        const computeCoordinates = () => {
          return `${x + offset.x * i}:${y + offset.y * i}`;
        };

        while (lastSnapshot[computeCoordinates()] === turn) {
          count += 1;
          trace = [...trace, computeCoordinates()];

          i += 1;
        }
      });

      if (count === 5) {
        return {
          trace,
        };
      }

      return null;
    };

    const checkResult =
      checkDirection("horizontal") ||
      checkDirection("vertical") ||
      checkDirection("diagonalUp") ||
      checkDirection("diagonalDown");

    if (checkResult) {
      setWin({ color: turn, coordinates: checkResult.trace });
    }
  };

  const handleMove = (coordinates: string, turn: Color) => {
    setHistory([
      ...history,
      {
        ...lastSnapshot,
        [coordinates]: turn,
      },
    ]);
  };

  const handleUndo = () => {
    setHistory(history.slice(0, -1));
    setWin(null);
  };

  const handleRestart = () => {
    setHistory([]);
    setWin(null);
  };

  const contextValue = {
    lastSnapshot,
    turn,
    handleMove,
    handleUndo,
    handleRestart,
    win,
    checkWinning,
  };

  return (
    <GameContext.Provider value={contextValue}>
      <Mobile />
      <Desktop />
    </GameContext.Provider>
  );
};

export default Game;
