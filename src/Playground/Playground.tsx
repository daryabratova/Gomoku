import React from "react";
import * as Styles from "./Playground.styles";

const Playground: React.FC = () => {
  return (
    <Styles.Layout>
      <Styles.Title>Gomoku</Styles.Title>
      <Styles.Content>
        <Styles.TopLine>
          <Styles.Timer>00:02:45</Styles.Timer>
          <Styles.Turn>Your turn</Styles.Turn>
        </Styles.TopLine>
        <Styles.GameTable />
        <Styles.BottomLine>
          <Styles.UndoButton>Undo</Styles.UndoButton>
          <Styles.RestartButton>Restart</Styles.RestartButton>
        </Styles.BottomLine>
      </Styles.Content>
    </Styles.Layout>
  );
};

export default Playground;
