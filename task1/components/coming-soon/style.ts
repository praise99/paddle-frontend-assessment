import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily.poppins};
  height: 170vh;
  overflow: hidden;
  background-image: url("bg.svg");
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 62px;
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
    .input-email {
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 51px;
      height: 67px;
      width: 100%;
      padding-left: 20px;
      outline: none;
      font-size: 17px;
      font-weight: 300;
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
    }
  }
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title,
  .description {
    text-align: center;
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
  height: 134px;
  width: 120px;
  border-radius: 9px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 16px;
  .time {
    padding-top: 5px;
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
  .circle {
    width: 85%;
    border: 2px solid #625960;
    height: 900px;
    border-radius: 50%;
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
    }
    .links-pages {
      opacity: 0.61;
    }
  }
`;
export { Wrapper, Header, Cards, Card, Form, Circle };
