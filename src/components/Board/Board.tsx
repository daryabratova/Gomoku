import React, { useContext } from "react";
import GameContext from "../../contexts/game";
import * as Styles from "./Board.styles";

const Board: React.FC = () => {
  const { cells, setCells, turn, setTurn } = useContext(GameContext);

  return (
    <Styles.BoardLayout>
      {cells.map((cell, i) => {
        const handleClick = () => {
          if (cell !== null) {
            return;
          }

          const cellsCopy = cells.slice();
          cellsCopy[i] = turn;
          setCells(cellsCopy);

          if (turn === "black") {
            setTurn("white");
          } else {
            setTurn("black");
          }
        };

        const getStone = () => {
          if (!cell) {
            return null;
          }

          if (cell === "black") {
            return <Styles.BlackStone />;
          }

          return <Styles.WhiteStone />;
        };

        return (
          <Styles.StoneWrapper display={cell} onClick={handleClick} key={i}>
            {getStone()}
          </Styles.StoneWrapper>
        );
      })}
    </Styles.BoardLayout>
  );
};

export default Board;
