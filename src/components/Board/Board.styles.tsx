import styled, { css } from "styled-components";

import * as theme from "../../data/theme";

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

  @media ${theme.devices.tablet}, ${theme.devices.desktop} {
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

  @media ${theme.devices.tablet}, ${theme.devices.desktop} {
    width: 28px;
    height: 28px;
  }
`;

export const Stone = styled.div<{
  glow?: boolean;
}>`
  width: 17px;
  height: 17px;
  background-size: 17px;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  ${(props) => {
    if (props.glow) {
      return css`
        box-shadow: ${theme.colors.white} 0 0 4px,
          ${theme.colors.white} 0 0 10px;
        background-color: ${theme.colors.white};
      `;
    }

    return null;
  }}

  @media ${theme.devices.tablet}, ${theme.devices.desktop} {
    width: 27px;
    height: 27px;
    background-size: 27px;
  }
`;

export const BlackStone = styled(Stone)`
  background-image: url(${BlackStoneIcon});
`;

export const WhiteStone = styled(BlackStone)`
  background-image: url(${WhiteStoneIcon});
`;
