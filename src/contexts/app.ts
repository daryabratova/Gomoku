import React from "react";
import { Moves, Color } from "../types/game";

//NOTE - general app context, equals null only on initialization
const AppContext = React.createContext<{
  gameIsStarted: boolean;
  startGame: () => void;
  moves: Moves;
  turn: Color;
  win: null | { color: Color; coordinates: string[] };
  handleMove: (x: number, y: number) => void;
  handleUndo: () => void;
  handleRestart: () => void;
}>(null!);

export default AppContext;
