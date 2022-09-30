import React, { useContext } from "react";

import AppContext from "../../contexts/app";

import Intro from "../Intro";
import Board from "../Board";

import * as Styles from "./Game.styles";

const Game: React.FC = () => {
  const { gameIsStarted, turn, handleUndo, handleRestart, win } =
    useContext(AppContext);

  const renderTurn = () => {
    if (win) {
      if (win.color === "black") {
        return <Styles.BlackStone glow />;
      }

      return <Styles.WhiteStone glow />;
    }

    if (turn === "black") {
      return <Styles.BlackStone />;
    }

    return <Styles.WhiteStone />;
  };

  const renderMessage = () => {
    if (win) {
      return <Styles.Turn>You win!</Styles.Turn>;
    }

    return <Styles.Turn>Your turn</Styles.Turn>;
  };

  const renderMobile = () => {
    return (
      <Styles.LayoutMobile>
        <Styles.Title>Gomoku</Styles.Title>
        <Styles.ContentMobile>
          <Styles.Info>
            {renderTurn()} {renderMessage()}
          </Styles.Info>
          <Board />
          <Styles.BottomLine>
            <Styles.UndoButton onClick={handleUndo}>Undo</Styles.UndoButton>
            <Styles.RestartButton onClick={handleRestart}>
              Restart
            </Styles.RestartButton>
          </Styles.BottomLine>
        </Styles.ContentMobile>
      </Styles.LayoutMobile>
    );
  };

  const renderDesktop = () => {
    return (
      <Styles.LayoutDesktop>
        <Styles.ContentDesktop>
          <Board />
          <Styles.RightSection>
            <Styles.Title>Gomoku</Styles.Title>
            <Styles.Info>
              {renderTurn()} {renderMessage()}
            </Styles.Info>
            <Styles.BottomLine>
              <Styles.UndoButton onClick={handleUndo}>Undo</Styles.UndoButton>
              <Styles.RestartButton onClick={handleRestart}>
                Restart
              </Styles.RestartButton>
            </Styles.BottomLine>
          </Styles.RightSection>
        </Styles.ContentDesktop>
      </Styles.LayoutDesktop>
    );
  };

  if (!gameIsStarted) {
    return <Intro />;
  }

  return (
    <>
      {renderMobile()}
      {renderDesktop()}
    </>
  );
};

export default Game;
