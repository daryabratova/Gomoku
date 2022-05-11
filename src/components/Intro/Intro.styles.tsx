import styled from "styled-components";

import "@fontsource/nunito-sans";
import "@fontsource/permanent-marker";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #5e5656;
  color: #ebdacb;
`;

export const Title = styled.h1`
  margin-top: 60px;
  font-family: "Permanent Marker";
  font-size: 60px;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  @media screen and (min-width: 700px) {
    margin-top: 220px;
    font-size: 86px;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Rules = styled.p`
  padding: 0 30px;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.03em;

  @media screen and (min-width: 700px) {
    margin-top: 150px;
    padding: 0 150px;
    font-size: 30px;
    line-height: 40px;
  }

  @media screen and (min-width: 1200px) {
    width: 520px;
    padding: 0 140px;
    margin: 60px auto 0;
    font-size: 22px;
    line-height: 33px;
  }
`;

export const Button = styled.button`
  width: 114px;
  height: 36px;
  margin-top: 30px;
  background-color: #ebdacb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 2px solid #ebdacb;
  border-radius: 50px;
  font-family: "Nunito Sans";
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.03em;
  color: #5e5656;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    border: 2px solid #5e5656;
  }

  @media screen and (min-width: 700px) {
    margin-top: 50px;
    width: 176px;
    height: 58px;
    font-size: 28px;
    line-height: 30px;
  }

  @media screen and (min-width: 1200px) {
    width: 168px;
    height: 56px;
    margin-top: 30px;
    font-size: 22px;
    font-weight: 600;
    line-height: 30px;
  }
`;
