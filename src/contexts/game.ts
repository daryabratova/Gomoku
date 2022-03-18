import React from "react";
import { Turn } from "../types/game";

const GameContext = React.createContext<{
  turn: Turn;
  setTurn: (turn: Turn) => void;
}>(null!);

export default GameContext;
