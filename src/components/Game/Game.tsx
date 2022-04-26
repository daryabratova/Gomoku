import React, { useState } from "react";

import { History, Turn } from "../../types/game";
import GameContext from "../../contexts/game";

import Mobile from "../GameMobile";
import Desktop from "../GameDesktop";

const Game: React.FC = () => {
  const [history, setHistory] = useState<History>([]);
  const lastSnapshot = history[history.length - 1] || {};
  const turn: Turn = history.length % 2 ? "white" : "black";

  const handleMove = (coordinates: string, turn: Turn) => {
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
  };

  const handleRestart = () => {
    setHistory([]);
  };

  const contextValue = {
    lastSnapshot,
    turn,
    handleMove,
    handleUndo,
    handleRestart,
  };

  return (
    <GameContext.Provider value={contextValue}>
      <Mobile />
      <Desktop />
    </GameContext.Provider>
  );
};

export default Game;
