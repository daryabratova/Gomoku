import styled from "styled-components";

import { theme } from "../../values/theme";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.zambezi};
  color: ${theme.colors.almond};
`;

export const Title = styled.h1`
  font-family: ${theme.fonts.accent};
  font-size: 60px;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  @media ${theme.devices.tablet} {
    font-size: 72px;
  }

  @media ${theme.devices.desktop} {
    font-size: 86px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15%;

  @media ${theme.devices.tablet} {
    margin-top: 8%;
  }

  @media ${theme.devices.desktop} {
    margin-top: 2%;
  }
`;

export const Rules = styled.p`
  padding: 0 30px;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.03em;

  @media ${theme.devices.tablet} {
    padding: 0 125px;
    font-size: 24px;
    line-height: 40px;
  }

  @media ${theme.devices.desktop} {
    width: 520px;
    padding: 0 140px;
    margin: 0 auto;
    font-size: 22px;
    line-height: 33px;
  }
`;

export const Button = styled.button`
  width: 114px;
  height: 36px;
  margin-top: 30px;
  background-color: ${theme.colors.almond};
  box-shadow: 0px 4px 4px ${theme.colors.shadow};
  border: 2px solid ${theme.colors.almond};
  border-radius: 50px;
  font-family: ${theme.fonts.primary};
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.03em;
  color: ${theme.colors.zambezi};
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    border: 2px solid ${theme.colors.zambezi};
  }

  @media ${theme.devices.tablet} {
    margin-top: 50px;
    width: 176px;
    height: 58px;
    font-size: 28px;
    line-height: 30px;
  }

  @media ${theme.devices.desktop} {
    width: 168px;
    height: 56px;
    margin-top: 30px;
    font-size: 22px;
    font-weight: 600;
    line-height: 30px;
  }
`;
