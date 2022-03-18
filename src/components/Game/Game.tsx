import React, { useState } from "react";

import { Turn } from "../../types/game";
import GameContext from "../../contexts/game";

import Mobile from "../Game/Mobile";
import Desktop from "../Game/Desktop";

const Game: React.FC = () => {
  const [turn, setTurn] = useState<Turn>("black");

  return (
    <GameContext.Provider value={{ turn, setTurn }}>
      <Mobile />
      <Desktop />
    </GameContext.Provider>
  );
};

export default Game;
