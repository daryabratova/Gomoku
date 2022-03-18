import React, { useState } from "react";

import { Cells, Turn } from "../../types/game";
import GameContext from "../../contexts/game";

import Mobile from "../Game/Mobile";
import Desktop from "../Game/Desktop";

const Game: React.FC = () => {
  const [cells, setCells] = useState<Cells>(
    [...Array(225)].map(() => {
      return null;
    })
  );

  const [turn, setTurn] = useState<Turn>("black");

  return (
    <GameContext.Provider value={{ cells, setCells, turn, setTurn }}>
      <Mobile />
      <Desktop />
    </GameContext.Provider>
  );
};

export default Game;
