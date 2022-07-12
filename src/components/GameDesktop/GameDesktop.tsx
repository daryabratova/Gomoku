import React, { useContext } from "react";

import Board from "../Board";
import GameContext from "../../contexts/game";

import * as Styles from "./GameDesktop.styles";

const GameDesktop: React.FC = () => {
  const { turn, handleUndo, handleRestart, win } = useContext(GameContext);

  const renderStone = () => {
    if (win) {
      if (win.color === "black") {
        return <Styles.BlackStone glow />;
      }

      return <Styles.WhiteStone glow />;
    }

    if (turn === "black") {
      return <Styles.BlackStone />;
    }

    return <Styles.WhiteStone />;
  };

  const renderMessage = () => {
    if (win) {
      return <Styles.Turn>You win!</Styles.Turn>;
    }

    return <Styles.Turn>Your turn</Styles.Turn>;
  };

  return (
    <Styles.Layout>
      <Styles.Content>
        <Board />
        <Styles.RightSection>
          <Styles.Title>Gomoku</Styles.Title>
          <Styles.Info>
            {renderStone()} {renderMessage()}
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
