import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily.poppins};
  height: 100vh;
  background-image: url("bg.svg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
const Blog = () => {
  return <Wrapper>blog</Wrapper>;
};

export default Blog;
