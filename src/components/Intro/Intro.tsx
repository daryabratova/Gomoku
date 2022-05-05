import React from "react";
import * as Styles from "./Intro.styles";

const Intro: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <Styles.Layout>
      <Styles.Title>Gomoku</Styles.Title>
      <Styles.Content>
        <Styles.Rules>
          The objective of the game is to form an unbroken chain of 5 stones
          horizontally, vertically, or diagonally. To play your turn, place the
          stone of your color on the intersection. Placing more than 5 stones
          consecutively on the board does not result in a win.
        </Styles.Rules>
        <Styles.Button onClick={onStart}>Start</Styles.Button>
      </Styles.Content>
    </Styles.Layout>
  );
};

export default Intro;
