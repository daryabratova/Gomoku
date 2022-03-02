import React, { useState } from "react";
import Entrance from "../Entrance";
import Playground from "../Playground";
import PlaygroundDesktop from "../PlaygroundDesktop";
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
          <Playground />
          <PlaygroundDesktop />
        </>
      );
    }
    return <Entrance onStart={showPlaygroundPage} />;
  };

  return (
    <>
      <Styles.Global />
      {renderPage()}
    </>
  );
};

export default App;
