import styled from "styled-components";
const ContactWrapper = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily.poppins};
  height: auto;
  background-image: url("bg.svg");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 30px;

  .title {
    margin-top: 30px;
    font-size: 30px;
    text-align: center;
    margin-bottom: 40px;
  }
`;
const Form = styled.form`
  .input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 24px;
  }
  .name {
    font-size: 14px;
    opacity: 0.61;
  }
  input,
  textarea {
    margin-top: 14px;
    background: #ffffff;
    border-radius: 15px;
    width: 100%;
    height: 60px;
    outline: none;
    padding-left: 25px;
    font-size: 14px;
    color: #000000;
    /* opacity: 0.54; */
  }
  textarea {
    resize: none;
    height: 150px;
    padding-top: 20px;
  }
  button {
    margin-top: 10px;
    margin-bottom: 30px;
    background: #271ac1 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 10px #09090991;
    width: 200px;
    height: 54px;
    border-radius: 30px;
    font-size: 14px;
    color: #ffffff;
    text-transform: uppercase;
    cursor: pointer;
    border: 2px solid #271ac1;
  }
`;
export { ContactWrapper, Form };
