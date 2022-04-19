import React from "react";
import { Moves, Turn } from "../types/game";

const GameContext = React.createContext<{
  moves: Moves;
  setMoves: (moves: Moves) => void;
  turn: Turn;
  setTurn: (turn: Turn) => void;
}>(null!);

export default GameContext;
