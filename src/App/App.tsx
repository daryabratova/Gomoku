import React from "react";
import Entrance from "../Entrance";
import * as Styles from "./App.styles";

const App: React.FC = () => {
  return (
    <>
      <Styles.Global />
      <Entrance />
    </>
  );
};

export default App;
