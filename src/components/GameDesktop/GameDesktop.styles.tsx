import styled from "styled-components";

import "@fontsource/nunito-sans";
import "@fontsource/permanent-marker";

import BlackStoneIcon from "../../assets/black-stone.svg";
import WhiteStoneIcon from "../../assets/white-stone.svg";
import UndoIcon from "../../assets/undo.svg";
import RestartIcon from "../../assets/restart.svg";

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
  height: 300px;
`;

export const Title = styled.h1`
  font-family: "Permanent Marker";
  font-size: 64px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: #5e5656;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 66px;
  border-top: 1px solid #5e5656;
  border-bottom: 1px solid #5e5656;
`;

export const BlackStone = styled.div`
  width: 27px;
  height: 27px;
  background-image: url(${BlackStoneIcon});
  background-size: 27px;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
`;

export const WhiteStone = styled(BlackStone)`
  background-image: url(${WhiteStoneIcon});
`;

export const Turn = styled.span`
  display: inline-block;
  padding: 0 15px;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: 0.03em;
  color: #5e5656;
`;

export const BottomLine = styled.div`
  display: flex;
  justify-content: center;
  width: 405px;
`;

export const Button = styled.button`
  width: 168px;
  height: 56px;
  background-color: #5e5656;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  font-family: "Nunito Sans";
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
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
