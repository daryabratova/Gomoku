import React from "react";
import Board from "../Board";
import * as Styles from "./Game.styles";

const Game: React.FC = () => {
  return (
    <Styles.Layout>
      <Styles.Title>Gomoku</Styles.Title>
      <Styles.Content>
        <Styles.TopLine>
          <Styles.Timer>00:02:45</Styles.Timer>
          <Styles.Turn>Your turn</Styles.Turn>
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

export default Game;