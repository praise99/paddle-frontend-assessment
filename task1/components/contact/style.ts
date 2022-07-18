import styled from "styled-components";
const ContactWrapper = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  height: auto;
  background-image: url("bg.svg");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 30px;

  .title {
    margin-top: 70px;
    font-size: ${({ theme }) => theme.fontSize.text24};
    text-align: center;
    margin-bottom: 40px;
  }
`;
const Form = styled.form`
  .name-box {
    position: relative;
  }
  .blue-circle {
    width: 150px;
    height: 100px;
    background-color: red;
    position: absolute;
    right: 50px;
    margin-top: -25px;
    background: transparent
      linear-gradient(180deg, #1f3568 0%, transparent 100%) 0% 0% no-repeat
      padding-box;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-radius: 150px 150px 0 0;
  }
  .input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 24px;
  }
  .name {
    font-size: ${({ theme }) => theme.fontSize.text14};
    opacity: 0.61;
  }
  input,
  textarea {
    margin-top: 14px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 15px;
    width: 100%;
    height: 60px;
    outline: none;
    padding-left: 25px;
    font-size: ${({ theme }) => theme.fontSize.text14};
    color: ${({ theme }) => theme.colors.black};
    /* opacity: 0.54; */
  }
  textarea {
    resize: none;
    height: 150px;
    padding-top: 20px;
  }
  .button {
    margin-top: 10px;
    margin-bottom: 30px;
  }
`;
export { ContactWrapper, Form };
