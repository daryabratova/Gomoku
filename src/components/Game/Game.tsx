import React, { useState } from "react";

import { Moves, Turn } from "../../types/game";
import GameContext from "../../contexts/game";

import Mobile from "../GameMobile";
import Desktop from "../GameDesktop";

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
