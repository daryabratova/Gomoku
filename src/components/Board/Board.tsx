import React, { useContext } from "react";
import GameContext from "../../contexts/game";
import * as Styles from "./Board.styles";

const range = (n: number) => {
  // Creates an array with numbers from 0 to n-1
  return [...Array(n)].map((_, i) => i);
};

const Board: React.FC = () => {
  const { moves, setMoves, turn, setTurn } = useContext(GameContext);

  return (
    <Styles.BoardLayout>
      {range(15).map((y) => {
        return range(15).map((x) => {
          // Will be "0-14:0-14"
          const coordinates = [x, y].join(":");

          // udefined | "black" | "white"
          const move = moves[coordinates];

          const handleClick = () => {
            // Exit if move already exists
            if (move) {
              return;
            }

            setMoves({
              ...moves,
              [coordinates]: turn,
            });

            // Switch turn after move
            if (turn === "black") {
              setTurn("white");
            } else {
              setTurn("black");
            }
          };

          const getStone = () => {
            if (!move) {
              return null;
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
