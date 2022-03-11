import styled from "styled-components";

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
  margin-top: 48px;
  font-weight: 900;
  font-size: 48px;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  @media screen and (min-width: 700px) {
    margin-top: 120px;
    font-size: 96px;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 220px;
    font-size: 64px;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 700px) {
    display: none;
  }
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
    font-size: 28px;
    line-height: 33px;
  }

  @media screen and (min-width: 1200px) {
    width: 520px;
    margin: 80px auto 0;
    padding: 0 140px;
  }
`;

export const Button = styled.button`
  width: 114px;
  height: 36px;
  margin-top: 30px;
  background-color: #ebdacb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 50px;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.03em;
  color: #5e5656;
  border: 2px solid #ebdacb;
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
    font-size: 24px;
    line-height: 28px;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 35px;
    width: 184px;
    height: 60px;
    font-size: 20px;
    line-height: 23px;
  }
`;
