import React from "react";
import * as Styles from "./PlaygroundDesktop.styles";

const PlaygroundDesktop: React.FC = () => {
  return (
    <Styles.Layout>
      <Styles.Content>
        <Styles.GameTable />
        <Styles.RightSection>
          <Styles.Title>Gomoku</Styles.Title>
          <Styles.Info>
            <Styles.Turn>Your turn</Styles.Turn>
            <Styles.Timer>00:02:45</Styles.Timer>
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

export default PlaygroundDesktop;
