import React, { useContext } from "react";
import Board from "../../Board";
import GameContext from "../../../contexts/game";
import * as Styles from "./Desktop.styles";

const Desktop: React.FC = () => {
  const { turn } = useContext(GameContext);

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
            <Styles.UndoButton>Undo</Styles.UndoButton>
            <Styles.RestartButton>Restart</Styles.RestartButton>
          </Styles.BottomLine>
        </Styles.RightSection>
      </Styles.Content>
    </Styles.Layout>
  );
};

export default Desktop;
