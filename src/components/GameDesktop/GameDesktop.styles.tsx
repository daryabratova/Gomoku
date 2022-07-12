import styled, { css } from "styled-components";

import * as theme from "../../data/theme";

import BlackStoneIcon from "../../assets/black-stone.svg";
import WhiteStoneIcon from "../../assets/white-stone.svg";
import UndoIcon from "../../assets/undo.svg";
import RestartIcon from "../../assets/restart.svg";

export const Layout = styled.div`
  display: none;

  @media ${theme.devices.desktop} {
    display: block;
    width: 100%;
    height: 100vh;
    padding: 0.1px;
    background-color: ${theme.colors.almond};
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 940px;
  height: 447px;
  transform: translate(-50%, -50%);
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 439px;
  height: 300px;
`;

export const Title = styled.h1`
  font-family: ${theme.fonts.accent};
  font-size: 64px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: ${theme.colors.zambezi};
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 66px;
  border-top: 1px solid ${theme.colors.zambezi};
  border-bottom: 1px solid ${theme.colors.zambezi};
`;

export const Stone = styled.div<{ glow?: boolean }>`
  width: 27px;
  height: 27px;
  background-size: 27px;
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
`;

export const BlackStone = styled(Stone)`
  background-image: url(${BlackStoneIcon});
`;

export const WhiteStone = styled(Stone)`
  background-image: url(${WhiteStoneIcon});
`;

export const Turn = styled.span`
  display: inline-block;
  padding: 0 15px;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: 0.03em;
  color: ${theme.colors.zambezi};
`;

export const BottomLine = styled.div`
  display: flex;
  justify-content: center;
  width: 405px;
`;

export const Button = styled.button`
  width: 168px;
  height: 56px;
  background-color: ${theme.colors.zambezi};
  box-shadow: 0px 4px 4px ${theme.colors.shadow};
  border-radius: 50px;
  font-family: ${theme.fonts.primary};
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.03em;
  text-align: left;
  color: ${theme.colors.almond};
  border: 2px solid ${theme.colors.zambezi};
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    border: 2px solid ${theme.colors.almond};
  }
`;

export const UndoButton = styled(Button)`
  padding-left: 70px;
  margin-right: 29px;
  background-image: url(${UndoIcon});
  background-repeat: no-repeat;
  background-size: 36px 22px;
  background-position: 28px center;
`;

export const RestartButton = styled(Button)`
  padding-left: 65px;
  background-image: url(${RestartIcon});
  background-repeat: no-repeat;
  background-size: 34px;
  background-position: 22px center;
`;
