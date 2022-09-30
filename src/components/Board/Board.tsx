import React, { useContext } from "react";
import AppContext from "../../contexts/app";
import * as Styles from "./Board.styles";

const range = (n: number) => {
  return [...Array(n)].map((_, i) => i);
};

const Board: React.FC = () => {
  const { moves, handleMove, win } = useContext(AppContext);

  return (
    <Styles.BoardLayout>
      {range(15).map((y) => {
        return range(15).map((x) => {
          const coordinates = [x, y].join(":");

          const move = moves[coordinates];

          const handleClick = () => {
            handleMove(x, y);
          };

          const renderStone = () => {
            if (!move) {
              return null;
            }

            if (win) {
              if (win.coordinates.includes(coordinates)) {
                if (move === "black") {
                  return <Styles.BlackStone glow />;
                }

                return <Styles.WhiteStone glow />;
              }
            }

            if (move === "black") {
              return <Styles.BlackStone />;
            }

            return <Styles.WhiteStone />;
          };

          return (
            <Styles.StoneWrapper
              key={coordinates}
              occupied={Boolean(move)}
              onClick={handleClick}
            >
              {renderStone()}
            </Styles.StoneWrapper>
          );
        });
      })}
    </Styles.BoardLayout>
  );
};

export default Board;
