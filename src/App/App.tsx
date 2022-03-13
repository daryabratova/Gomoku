import React, { useState } from "react";
import Intro from "../Intro";
import Game from "../Game";
import GameDesktop from "../GameDesktop";
import * as Styles from "./App.styles";

const App: React.FC = () => {
  const [playgroundIsOpen, setPlaygroundIsOpen] = useState(false);

  const showPlaygroundPage = () => {
    setPlaygroundIsOpen(true);
  };

  const renderPage = () => {
    if (playgroundIsOpen) {
      return (
        <>
          <Game />
          <GameDesktop />
        </>
      );
    }
    return <Intro onStart={showPlaygroundPage} />;
  };

  return (
    <>
      <Styles.Global />
      {renderPage()}
    </>
  );
};

export default App;
