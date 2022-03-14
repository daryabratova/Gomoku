import React, { useState } from "react";
import Intro from "../Intro";
import Game from "../Game";
import GameDesktop from "../GameDesktop";
import * as Styles from "./App.styles";

const App: React.FC = () => {
  const [gameIsOpen, setGameIsOpen] = useState(false);

  const showGamePage = () => {
    setGameIsOpen(true);
  };

  const renderPage = () => {
    if (gameIsOpen) {
      return (
        <>
          <Game />
          <GameDesktop />
        </>
      );
    }
    return <Intro onStart={showGamePage} />;
  };

  return (
    <>
      <Styles.Global />
      {renderPage()}
    </>
  );
};

export default App;
