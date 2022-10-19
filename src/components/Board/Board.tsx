import React, { useContext } from "react";
import AppContext from "../../contexts/app";
import * as Styles from "./Board.styles";

//NOTE - create an array with numbers from 0 to (passed number - 1)
const range = (n: number) => {
  return [...Array(n)].map((_, i) => i);
};

const Board: React.FC = () => {
  const { moves, handleMove, win } = useContext(AppContext);

  return (
    <Styles.BoardLayout>
      {/* NOTE - map through array from 0 to 14 and through inner array from 0 to 14 */}
      {range(15).map((y) => {
        return range(15).map((x) => {
          //NOTE - coordinates will look like "3:12" for example
          const coordinates = [x, y].join(":");

          const move = moves[coordinates];

          const handleClick = () => {
            handleMove(x, y);
          };

          const renderStone = () => {
            if (!move) {
              return null;
            }

            //NOTE - check if a stone is inside winning row and render it with glow
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
