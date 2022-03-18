import styled from "styled-components";

import { Turn as TurnType } from "../../../types/game";

import BlackStone from "../../../assets/black-stone.svg";
import WhiteStone from "../../../assets/white-stone.svg";
import UndoIcon from "../../../assets/undo.svg";
import RestartIcon from "../../../assets/restart.svg";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0.1px;
  background-color: #ebdacb;

  @media screen and (max-width: 1200px) {
    display: none;
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
  height: 322px;
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 64px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: #5e5656;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 66px;
  border-top: 1px solid #303040;
  border-bottom: 1px solid #303040;
`;

export const Turn = styled.span<{ turn: TurnType }>`
  display: inline-block;
  padding-left: 40px;
  font-weight: 300;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.03em;
  background-image: ${(props) =>
    props.turn === "black" ? `url(${BlackStone})` : `url(${WhiteStone})`};
  background-repeat: no-repeat;
  background-size: 28px;
  color: #4b4444;
`;

export const Timer = styled.span`
  font-size: 36px;
  line-height: 42px;
  letter-spacing: 0.03em;
  color: #5e5656;
`;

export const BottomLine = styled.div`
  display: flex;
  justify-content: center;
  width: 405px;
`;

export const Button = styled.button`
  width: 184px;
  height: 60px;
  padding-left: 76px;
  background-color: #5e5656;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.03em;
  text-align: left;
  color: #ebdacb;
  border: 2px solid #5e5656;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    border: 2px solid #ebdacb;
  }
`;

export const UndoButton = styled(Button)`
  margin-right: 29px;
  background-image: url(${UndoIcon});
  background-repeat: no-repeat;
  background-size: 36px 26px;
  background-position: 32px center;
`;

export const RestartButton = styled(Button)`
  background-image: url(${RestartIcon});
  background-repeat: no-repeat;
  background-size: 39px;
  background-position: 26px center;
`;
