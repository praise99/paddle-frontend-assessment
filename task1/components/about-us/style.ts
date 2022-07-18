import styled from "styled-components";
import { fontSize } from "../../themes";
const AboutWrapper = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  height: 100%;
  overflow: hidden;
  background-image: url("bg.svg");
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 62px;
  .flex {
    display: flex;
    align-items: center;
  }
`;
const AboutHeader = styled.div`
  display: flex;
  align-items: center;

  .left-desc {
    width: 60%;
    /* background: transparent linear-gradient(180deg, #213f72 0%, #19073b 100%) 0%
      0% no-repeat padding-box; */
    opacity: 1;
    background-color: #311254;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    height: 70vh;
    position: relative;
    .about-line {
      position: absolute;
      right: 19%;
      top: 110px;
    }
  }
  .square {
    filter: blur(12px);
    background: transparent
      linear-gradient(180deg, #8a2e89 0%, transparent 100%) 0% 0% no-repeat
      padding-box;
    height: 350px;
    width: 250px;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    position: absolute;
    right: 90px;
    top: 30px;
    border-radius: 10px;
    display: flex;
    align-self: center;
    justify-content: center;
    flex-direction: column;
  }
  .line {
    width: 60px;
    height: 1.5px;
    border: 1px solid ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.white} 0% 0% no-repeat padding-box;
    border: 1px solid ${({ theme }) => theme.colors.white};
    margin-right: 10px;
  }
  .right-desc {
    width: 40%;
    align-self: flex-end;
    .desc-width {
      width: 60%;
      margin-left: 30px;
    }
  }
  .title {
    position: absolute;
    font-size: ${({ theme }) => theme.fontSize.text40};
    left: 50%;
    right: 50%;
    width: 30%;
    margin-left: -30px;
  }
  .blue-circle {
    width: 241px;
    height: 241px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    right: 0;
    top: 120px;
    background: transparent
      linear-gradient(180deg, #20356a 0%, transparent 100%) 0% 0% no-repeat
      padding-box;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }
`;
const DevelopedWrapper = styled.div`
  width: 100%;
  padding: 150px 160px;
  .developed-text {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 100;
    text-transform: none;
  }
`;
const GrowingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 0px;
  padding-left: 160px;
  .description {
    width: 40%;
    .description_text {
      width: 80%;
      margin-bottom: 52px;
      p {
        line-height: 30px;
      }
    }
    .image {
      width: fit-content;
      height: fit-content;
      margin-left: 50px;
      transform: rotate(90deg);
    }
  }
  .information {
    width: 60%;
    background-color: #2d124c;
    opacity: 1;
    padding: 20px 40px;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 2px solid transparent;
    border-radius: 0px;
    position: relative;
    .description_text {
      /* width: 80%; */
      margin-bottom: 52px;
      p {
        line-height: 30px;
      }
    }
  }
  .blue-box {
    width: 250px;
    height: 300px;
    background-color: blue;
    position: absolute;
    top: 30px;
    background: transparent
      linear-gradient(180deg, #324a7d 0%, transparent 100%) 0% 0% no-repeat
      padding-box;
    z-index: -10;
    filter: blur(6px);

    left: 70px;
  }
`;
const Section = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 41px;
  .sectionNumber {
    margin-left: 10px;
    margin-bottom: 8px;
  }
  .section_desc {
    margin-top: 25px;
    align-self: end;
  }
  .line {
    width: 60px;
    height: 1.5px;
    border: 1px solid ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.white} 0% 0% no-repeat padding-box;
    border: 1px solid ${({ theme }) => theme.colors.white};
    margin-right: 10px;
  }
`;
const Questions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #291346;
  position: relative;
  padding: 90px 60px;
  .questions {
    width: 55%;
    .question-desc {
      margin-top: 19px;
      margin-bottom: 12px;
    }
    .question-title {
      font-size: 37px;
    }
  }
  .questions-image {
    width: 40%;
    .box-purple {
      width: 320px;
      height: 300px;
      background-color: blue;
      position: absolute;
      top: 80px;
      right: 10%;
      background: transparent
        linear-gradient(180deg, #633a3a 00%, transparent 70%) 0% 0% no-repeat
        padding-box;
      filter: blur(6px);
    }
  }
  .contact {
    color: #ff00f7;
  }
`;
const Circle = styled.div`
  width: 100%;
  /* margin-top: 140px; */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin-bottom: 30px;
  .circle {
    /* width: 85%;
    border: 2px solid  ${({ theme }) => theme.colors.gradientOne};
    height: 900px;
    border-radius: 50%;
    background:  ${({ theme }) => theme.colors.darkBlueShade}; */
    width: 100%;
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
export {
  AboutWrapper,
  AboutHeader,
  DevelopedWrapper,
  GrowingWrapper,
  Section,
  Questions,
  Circle,
};
