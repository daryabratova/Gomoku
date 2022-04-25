import React from "react";
import { Moves, Turn } from "../types/game";

const GameContext = React.createContext<{
  lastSnapshot: Moves;
  turn: Turn;
  handleMove: (coordinates: string, turn: Turn) => void;
}>(null!);

export default GameContext;
