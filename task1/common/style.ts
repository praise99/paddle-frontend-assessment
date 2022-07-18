import styled from "styled-components";
const TextBold = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  font-size: ${({ theme }) => theme.fontSize.text47};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  line-height: 62px;
  letter-spacing: 0px;
`;
const TextMedium = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.text47};
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
`;
const TextMedium40 = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.text40};
  color: ${({ theme }) => theme.colors.white};
`;
const TextSmall500 = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.text47};
  color: ${({ theme }) => theme.colors.white};
`;
const Text400 = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.text20};
  color: ${({ theme }) => theme.colors.white};
`;
const TextMedium300 = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSize.text21};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0px;
`;
const TextMedium500 = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.text22};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;
const TextSmall400 = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.text22};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.61;
  line-height: 25px;
`;
const TextMedium400 = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.text17};
  color: ${({ theme }) => theme.colors.black};
`;
const TextLittle400 = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.text14};
  color: ${({ theme }) => theme.colors.white};
`;
const TextLittle500 = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.text16};
  color: ${({ theme }) => theme.colors.white};
`;
const Button = styled.button`
  background: ${({ theme }) => theme.colors.blue} 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.grey};
  width: 200px;
  height: 54px;
  border-radius: 30px;
  font-size: ${({ theme }) => theme.fontSize.text14};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors.blue};
`;
export {
  TextBold,
  TextMedium,
  TextMedium300,
  TextMedium400,
  Text400,
  TextMedium500,
  TextSmall400,
  TextSmall500,
  TextLittle400,
  TextMedium40,
  Button,
  TextLittle500,
};
