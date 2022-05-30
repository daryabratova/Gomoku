import React from "react";
import { Moves, Color } from "../types/game";

const GameContext = React.createContext<{
  lastSnapshot: Moves;
  turn: Color;
  win: null | { color: Color; coordinates: string[] };
  handleMove: (coordinates: string, turn: Color) => void;
  handleUndo: () => void;
  handleRestart: () => void;
  checkWinning: (x: number, y: number) => void;
}>(null!);

export default GameContext;
