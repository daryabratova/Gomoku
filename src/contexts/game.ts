import React from "react";
import { Cells, Turn } from "../types/game";

const GameContext = React.createContext<{
  cells: Cells;
  setCells: (cells: Cells) => void;
  turn: Turn;
  setTurn: (turn: Turn) => void;
}>(null!);

export default GameContext;
