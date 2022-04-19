import React, { useState } from "react";

import { Moves, Turn } from "../../types/game";
import GameContext from "../../contexts/game";

import Mobile from "../Game/Mobile";
import Desktop from "../Game/Desktop";

const Game: React.FC = () => {
  const [moves, setMoves] = useState<Moves>({});
  const [turn, setTurn] = useState<Turn>("black");

  const contextValue = { moves, setMoves, turn, setTurn };

  return (
    <GameContext.Provider value={contextValue}>
      <Mobile />
      <Desktop />
    </GameContext.Provider>
  );
};

export default Game;
