import React, { useContext } from "react";
import GameContext from "../../contexts/game";
import * as Styles from "./Board.styles";

const range = (n: number) => {
  return [...Array(n)].map((_, i) => i);
};

const Board: React.FC = () => {
  const { lastSnapshot, turn, handleMove, checkWinning, win } =
    useContext(GameContext);

  return (
    <Styles.BoardLayout>
      {range(15).map((y) => {
        return range(15).map((x) => {
          const coordinates = [x, y].join(":");

          const move = lastSnapshot[coordinates];

          const handleClick = () => {
            if (move) {
              return;
            }

            if (win) {
              return;
            }

            handleMove(coordinates, turn);
            checkWinning(x, y);
          };

          const getStone = () => {
            if (!move) {
              return null;
            }

            if (win) {
              if (win.coordinates.includes(coordinates)) {
                if (move === "black") {
                  return <Styles.BlackStone shadow />;
                }

                return <Styles.WhiteStone shadow />;
              }
            }

            if (move === "black") {
              return <Styles.BlackStone />;
            }

            return <Styles.WhiteStone />;
          };

          return (
            <Styles.StoneWrapper
              display={move}
              onClick={handleClick}
              key={coordinates}
            >
              {getStone()}
            </Styles.StoneWrapper>
          );
        });
      })}
    </Styles.BoardLayout>
  );
};

export default Board;
