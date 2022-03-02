import styled from "styled-components";

import Token from "../assets/token.svg";
import Table from "../assets/table.svg";
import UndoIcon from "../assets/undo.svg";
import RestartIcon from "../assets/restart.svg";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0.1px;
  background-color: #ebdacb;

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const Title = styled.h1`
  position: absolute;
  top: 48px;
  left: 50%;
  transform: translate(-50%);
  font-weight: 900;
  font-size: 48px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: #5e5656;

  @media screen and (min-width: 700px) {
    top: 120px;
    font-size: 96px;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -70%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 390px;

  @media screen and (min-width: 700px) {
    width: 466px;
    height: 580px;
  }
`;

export const GameTable = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${Table});
  background-size: 300px;

  @media screen and (min-width: 700px) {
    width: 466px;
    height: 466px;
    background-size: 466px;
  }
`;

export const TopLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Timer = styled.span`
  font-size: 24px;
  letter-spacing: 0.03em;
  color: #5e5656;

  @media screen and (min-width: 700px) {
    font-size: 36px;
    line-height: 42px;
  }
`;

export const Turn = styled.span`
  display: inline-block;
  padding-left: 20px;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.03em;
  background-image: url(${Token});
  background-repeat: no-repeat;
  color: #4b4444;

  @media screen and (min-width: 700px) {
    padding-left: 25px;
    font-size: 30px;
    line-height: 22px;
    background-size: 22px;
  }
`;

export const BottomLine = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

export const Button = styled.button`
  width: 114px;
  height: 36px;
  padding-left: 22px;
  background-color: #5e5656;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.03em;
  color: #ebdacb;
  border: 2px solid #5e5656;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    border: 2px solid #ebdacb;
  }

  @media screen and (min-width: 700px) {
    width: 176px;
    height: 58px;
    padding-left: 66px;
    text-align: left;
    font-size: 24px;
    line-height: 28px;
  }
`;

export const UndoButton = styled(Button)`
  margin-right: 12px;
  background-image: url(${UndoIcon});
  background-repeat: no-repeat;
  background-position: 18px center;

  @media screen and (min-width: 700px) {
    margin-right: 46px;
    background-size: 30px 22px;
    background-position: 20px center;
  }
`;

export const RestartButton = styled(Button)`
  padding-left: 30px;
  background-image: url(${RestartIcon});
  background-repeat: no-repeat;
  background-position: 18px center;

  @media screen and (min-width: 700px) {
    padding-left: 63px;
    background-size: 30px 25px;
    background-position: 20px center;
  }
`;
