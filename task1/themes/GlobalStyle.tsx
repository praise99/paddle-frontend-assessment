import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  body{
     overflow-x:hidden ;
     font-family:"Poppins, sans-serif" ;
  }
  html{
  scroll-behavior: smooth;
}
/* Poppins */

@font-face {
  font-family: "Poppins";
  font-weight: 700;
  src: url("../assets/fonts/Poppins/Poppins-Bold.ttf");
}
@font-face {
  font-family: "Poppins";
  src: url("../assets/fonts/Poppins/Poppins-SemiBold.ttf");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "Poppins";
  font-weight: 500;
  src: url("../assets/fonts/Poppins/Poppins-Medium.ttf");
}

@font-face {
  font-family: "Poppins";
  font-weight: 400;
  src: url("../assets/fonts/Poppins/Poppins-Regular.ttf");
}

@font-face {
  font-family: "Poppins";
  font-weight: 300;
  src: url("../assets/fonts/Poppins/Poppins-Light.ttf");
}

`;
