import React from "react";
import * as Styles from "./Intro.styles";

const Intro: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <Styles.Layout>
      <Styles.Title>Gomoku</Styles.Title>
      <Styles.Content>
        <Styles.Rules>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Styles.Rules>
        <Styles.Button onClick={onStart}>Start</Styles.Button>
      </Styles.Content>
    </Styles.Layout>
  );
};

export default Intro;
