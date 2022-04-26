import React, { useContext } from "react";

import Board from "../Board";
import GameContext from "../../contexts/game";

import * as Styles from "./GameDesktop.styles";

const GameDesktop: React.FC = () => {
  const { turn, handleUndo, handleRestart } = useContext(GameContext);

  return (
    <Styles.Layout>
      <Styles.Content>
        <Board />
        <Styles.RightSection>
          <Styles.Title>Gomoku</Styles.Title>
          <Styles.Info>
            <Styles.Turn turn={turn}>Your turn</Styles.Turn>
          </Styles.Info>
          <Styles.BottomLine>
            <Styles.UndoButton onClick={handleUndo}>Undo</Styles.UndoButton>
            <Styles.RestartButton onClick={handleRestart}>
              Restart
            </Styles.RestartButton>
          </Styles.BottomLine>
        </Styles.RightSection>
      </Styles.Content>
    </Styles.Layout>
  );
};

export default GameDesktop;
