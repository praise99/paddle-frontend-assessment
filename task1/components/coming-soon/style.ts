import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily.poppins};
  height: auto;
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
    @media screen and (max-width: 1200px) {
      width: 80%;
    }
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
      @media screen and (max-width: 350px) {
        /* font-size: 8px;
        width: 120px; */
        padding-left: 10px;
        height: 50px;
      }
    }
    button {
      background: ${({ theme }) => theme.colors.blue};
      box-shadow: 0px 0px 10px #09090991;
      height: 67px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.white};
      font-size: 16px;
      width: 300px;
      border: 2px solid ${({ theme }) => theme.colors.blue};
      font-weight: 500;
      border-radius: 51px;
      position: absolute;
      right: 0px;
      @media screen and (max-width: 768px) {
        font-size: 13px;
        width: 200px;
      }
      @media screen and (max-width: 460px) {
        font-size: 10px;
        width: 150px;
      }
      @media screen and (max-width: 350px) {
        font-size: 8px;
        width: 120px;
        height: 50px;
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
    /* width: 60%; */
    /* min-width: 700px; */
    @media screen and (max-width: 768px) {
      font-size: 32px;
      line-height: 40px;
    }
    @media screen and (max-width: 460px) {
      font-size: 22px;
      line-height: 40px;
    }
  }
  .description {
    font-size: 18px;
    padding-top: 10px;
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
  @media screen and (max-width: 460px) {
    width: 60px;
  }
  .time {
    padding-top: 5px;
    @media screen and (max-width: 460px) {
      font-size: 14px;
    }
  }
  .time-title {
    font-size: 32px;
    @media screen and (max-width: 460px) {
      font-size: 24px;
    }
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
  height: 300px;

  .bottom-box {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: red;
    background: transparent
      linear-gradient(180deg, #213c6f 0%, transparent 100%) 0% 0% no-repeat
      padding-box;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    display: none;
  }
  .circle {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
    height: 900px;
    width: 85%;
    border-radius: 1800px 1800px 0 0;
    background: #201537;
    border: 1px solid #625960;
    @media screen and (max-width: 1000px) {
      width: 100%;
    }

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
    .icons {
      justify-content: center;
      width: 100%;
    }
    .service {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 24px;
      margin-bottom: 30px;
      justify-content: center;
      .privacy-policy {
        margin-left: 50px;
      }
      /* @media screen and (max-width: 768px) {
        width: 90%;
      } */
    }
    .links-pages {
      opacity: 0.61;
    }
  }
`;
export { Wrapper, Header, Cards, Card, Form, Circle };
