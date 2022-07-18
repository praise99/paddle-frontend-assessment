import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily.poppins};
  height: 170vh;
  overflow: hidden;
  background-image: url("bg.svg");
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 42px;
  padding-left: 20px;
  padding-right: 20px;
  .flex {
    display: flex;
    align-items: center;
  }
  .names {
    padding-top: 50px;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 45%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    .input-text {
      height: 33px;
      letter-spacing: 0px;
      color: #707070;
      text-transform: capitalize;
      opacity: 1;
      font-size: 14px;
      font-weight: 400;
      outline: none;
      padding-left: 20px;
      background: transparent;
      border: none;
      width: 90%;
      border-bottom: 2px solid #473a5d;
    }
    .pad-right {
      margin-right: 40px;
    }
  }
  .email {
    display: flex;
    align-items: center;
    position: relative;
    width: 55%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    .input-email {
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 51px;
      height: 67px;
      width: 100%;
      padding-left: 20px;
      outline: none;
      font-size: 17px;
      font-weight: 300;
      padding-left: 30px;
    }
    button {
      background: ${({ theme }) => theme.colors.blue};
      box-shadow: 0px 0px 10px #09090991;
      height: 67px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.white};
      font-size: 16px;
      width: 40%;
      border: 2px solid ${({ theme }) => theme.colors.blue};
      font-weight: 500;
      border-radius: 51px;
      position: absolute;
      right: 0px;
      @media screen and (max-width: 768px) {
        font-size: 10px;
      }
    }
  }
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;

  .left-box {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    left: 14%;
    top: -40px;
    background: transparent
      linear-gradient(180deg, #701a71 0%, transparent 100%) 0% 0% no-repeat
      padding-box;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    z-index: -10;
  }
  .right-box {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    right: 14%;
    top: 80px;
    background: transparent
      linear-gradient(180deg, #213c6f 0%, transparent 100%) 0% 0% no-repeat
      padding-box;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    z-index: -10;
  }
  .title,
  .description {
    text-align: center;
  }
  .title {
    @media screen and (max-width: 768px) {
      font-size: 32px;
      line-height: 40px;
    }
  }
  .description {
    font-size: 18px;
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }

  span {
    opacity: 0.61;
  }
`;
const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 36px;
`;
const Card = styled.div`
  height: 100px;
  width: 90px;
  border-radius: 9px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 16px;
  @media screen and (max-width: 768px) {
    width: 80px;
  }
  .time {
    padding-top: 5px;
  }
  .time-title {
    font-size: 32px;
  }
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Circle = styled.div`
  width: 100%;
  margin-top: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  position: relative;

  .bottom-box {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: red;
    /* left: 70% !important; */
    /* align-self: flex-start; */
    /* top: 80px; */
    /* align-self: none; */
    background: transparent
      linear-gradient(180deg, #213c6f 0%, transparent 100%) 0% 0% no-repeat
      padding-box;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    display: none;
  }
  .circle {
    width: 90%;
    border: 2px solid #625960;
    height: 90%;
    /* border-radius: 50%; */
    border-radius: 50% 50% 0 0;
    background: #201537;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    .icon-links {
      margin-top: 100px;
      margin-left: 30px;
      width: 28px;
      opacity: 0.54;
      :hover {
        opacity: 1;
      }
      /* color: aliceblue;
      .hover {
        background-color: white;
      } */
    }
    .service {
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 24px;
      margin-bottom: 30px;
      @media screen and (max-width: 768px) {
        width: 90%;
      }
    }
    .links-pages {
      opacity: 0.61;
    }
  }
`;
export { Wrapper, Header, Cards, Card, Form, Circle };
