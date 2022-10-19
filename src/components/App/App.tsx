import React, { useState } from "react";

import AppContext from "../../contexts/app";
import { History, Color } from "../../types/game";

import Game from "../Game";

import * as Styles from "./App.styles";

const App: React.FC = () => {
  const [gameIsStarted, setGameIsStarted] = useState(false);
  //NOTE - history contains of objects that are snapshots of game on every move
  const [history, setHistory] = useState<History>([]);

  const [win, setWin] = useState<null | {
    color: Color;
    coordinates: string[];
  }>(null);

  const moves = history[history.length - 1] || {};
  const turn: Color = history.length % 2 ? "white" : "black";

  const handleMove = (x: number, y: number) => {
    const coordinates = `${x}:${y}`;

    const move = moves[coordinates];

    //NOTE - if cell is already taken - nothing happens
    if (move) {
      return;
    }

    //NOTE - if someone has won - nothing happens
    if (win) {
      return;
    }

    setHistory([
      ...history,
      {
        ...moves,
        [coordinates]: turn,
      },
    ]);

    const checkDirection = (
      direction: "horizontal" | "vertical" | "diagonalUp" | "diagonalDown"
    ) => {
      //NOTE - instructions on how to move through board to check winning in every direction
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

      //NOTE - initial number of winning stones(cells)
      let count = 1;

      //NOTE - list of winning coordinates
      let trace = [coordinates];

      offsets[direction].forEach((offset) => {
        let i = 1;

        //NOTE - expression for taking next coordinates
        const computeCoordinates = () => {
          return `${x + offset.x * i}:${y + offset.y * i}`;
        };

        while (moves[computeCoordinates()] === turn) {
          count += 1;
          trace = [...trace, computeCoordinates()];

          i += 1;
        }
      });

      //NOTE - winning condition - to have 5 stones in one direction
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

    //NOTE - at least one direction returns true - win
    if (checkResult) {
      setWin({ color: turn, coordinates: checkResult.trace });
    }
  };

  const handleUndo = () => {
    setHistory(history.slice(0, -1));
    setWin(null);
  };

  const handleRestart = () => {
    setHistory([]);
    setWin(null);
  };

  const startGame = () => {
    setGameIsStarted(true);
  };

  const contextValue = {
    gameIsStarted,
    startGame,
    moves,
    turn,
    handleMove,
    handleUndo,
    handleRestart,
    win,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <Styles.Global />
      <Game />
    </AppContext.Provider>
  );
};

export default App;
