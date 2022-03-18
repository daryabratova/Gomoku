import React, { useContext } from "react";
import Board from "../../Board";
import GameContext from "../../../contexts/game";
import * as Styles from "./Mobile.styles";

const Mobile: React.FC = () => {
  const { turn } = useContext(GameContext);

  return (
    <Styles.Layout>
      <Styles.Title>Gomoku</Styles.Title>
      <Styles.Content>
        <Styles.TopLine>
          <Styles.Timer>00:02:45</Styles.Timer>
          <Styles.Turn turn={turn}>Your turn</Styles.Turn>
        </Styles.TopLine>
        <Board />
        <Styles.BottomLine>
          <Styles.UndoButton>Undo</Styles.UndoButton>
          <Styles.RestartButton>Restart</Styles.RestartButton>
        </Styles.BottomLine>
      </Styles.Content>
    </Styles.Layout>
  );
};

export default Mobile;