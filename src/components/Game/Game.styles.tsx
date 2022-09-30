import styled, { css } from "styled-components";

import { theme } from "../../values/theme";

import BlackStoneIcon from "../../assets/images/stone-black.svg";
import WhiteStoneIcon from "../../assets/images/stone-white.svg";
import UndoIcon from "../../assets/icons/undo.svg";
import RestartIcon from "../../assets/icons/restart.svg";

export const LayoutMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 0.1px;
  background-color: ${theme.colors.almond};

  @media ${theme.devices.desktop} {
    display: none;
  }
`;

export const LayoutDesktop = styled.div`
  display: none;

  @media ${theme.devices.desktop} {
    display: block;
    width: 100%;
    height: 100vh;
    padding: 0.1px;
    background-color: ${theme.colors.almond};
  }
`;

export const ContentMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 410px;
  margin-top: 10%;

  @media ${theme.devices.tablet} {
    width: 447px;
    height: 580px;
  }
`;

export const ContentDesktop = styled.div`
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
  font-size: 48px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: ${theme.colors.zambezi};

  @media ${theme.devices.tablet} {
    font-size: 72px;
  }

  @media ${theme.devices.desktop} {
    font-size: 64px;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border-top: 1px solid ${theme.colors.dark};
  border-bottom: 1px solid ${theme.colors.dark};

  @media ${theme.devices.desktop} {
    height: 66px;
    border-top: 1px solid ${theme.colors.zambezi};
    border-bottom: 1px solid ${theme.colors.zambezi};
  }
`;

export const Stone = styled.div<{ glow?: boolean }>`
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

  @media ${theme.devices.tablet} {
    width: 27px;
    height: 27px;
    background-size: 27px;
  }

  @media ${theme.devices.desktop} {
    width: 27px;
    height: 27px;
    background-size: 27px;
  }
`;

export const BlackStone = styled(Stone)`
  background-image: url(${BlackStoneIcon});
`;

export const WhiteStone = styled(Stone)`
  background-image: url(${WhiteStoneIcon});
`;

export const Turn = styled.span`
  display: inline-block;
  padding-left: 10px;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.03em;
  color: ${theme.colors.zambezi};

  @media ${theme.devices.tablet} {
    padding-left: 15px;
    font-size: 24px;
    line-height: 36px;
  }

  @media ${theme.devices.desktop} {
    padding: 0 15px;
    font-size: 22px;
    line-height: 28px;
  }
`;

export const BottomLine = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;

  @media ${theme.devices.desktop} {
    width: 405px;
  }
`;

export const Button = styled.button`
  width: 114px;
  height: 36px;
  padding-left: 22px;
  background-color: ${theme.colors.zambezi};
  background-size: 20px;
  box-shadow: 0px 4px 4px ${theme.colors.shadow};
  border: 2px solid ${theme.colors.zambezi};
  border-radius: 50px;
  font-family: ${theme.fonts.primary};
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.03em;
  color: ${theme.colors.almond};
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    border: 2px solid ${theme.colors.almond};
  }

  @media ${theme.devices.tablet} {
    width: 176px;
    height: 58px;
    padding-left: 66px;
    text-align: left;
    font-size: 24px;
    line-height: 28px;
  }

  @media ${theme.devices.desktop} {
    width: 168px;
    height: 56px;
    font-size: 20px;
    line-height: 30px;
  }
`;

export const UndoButton = styled(Button)`
  margin-right: 12px;
  background-image: url(${UndoIcon});
  background-repeat: no-repeat;
  background-position: 18px center;

  @media ${theme.devices.tablet} {
    margin-right: 46px;
    background-size: 30px 22px;
    background-position: 20px center;
  }

  @media ${theme.devices.desktop} {
    padding-left: 46px;
    margin-right: 29px;
    background-size: 36px 22px;
    background-position: 28px center;
  }
`;

export const RestartButton = styled(Button)`
  padding-left: 30px;
  background-image: url(${RestartIcon});
  background-repeat: no-repeat;
  background-position: 15px center;

  @media ${theme.devices.tablet} {
    padding-left: 63px;
    background-size: 30px 25px;
    background-position: 20px center;
  }

  @media ${theme.devices.desktop} {
    padding-left: 55px;
    background-size: 34px;
    background-position: 20px center;
  }
`;
