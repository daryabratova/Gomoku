import styled from "styled-components";

import Board from "../../assets/board.svg";
import BlackStoneIcon from "../../assets/black-stone.svg";
import WhiteStoneIcon from "../../assets/white-stone.svg";

export const BoardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(15, 18px);
  grid-template-rows: repeat(15, 18px);
  grid-gap: 2px;
  width: 300px;
  height: 300px;
  background-image: url(${Board});
  background-size: 300px;

  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(15, 28px);
    grid-template-rows: repeat(15, 28px);
    width: 447px;
    height: 447px;
    background-size: 447px;
  }
`;

export const StoneWrapper = styled.button<{
  display: "black" | "white" | null;
}>`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  cursor: ${(props) => (props.display ? "auto" : "pointer")};

  @media screen and (min-width: 700px) {
    width: 28px;
    height: 28px;
  }
`;

export const BlackStone = styled.div`
  width: 17px;
  height: 17px;
  background-image: url(${BlackStoneIcon});
  background-size: 17px;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-width: 700px) {
    width: 27px;
    height: 27px;
    background-size: 27px;
  }
`;

export const WhiteStone = styled(BlackStone)`
  background-image: url(${WhiteStoneIcon});
`;
