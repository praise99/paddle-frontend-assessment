import styled from "styled-components";
const Nav = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 0rem;
  background-image: url("bg.svg");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px 70px;
  color: black;
  box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
  .brand-name {
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
    margin-left: 1rem;
  }
  .navigation-menu {
    margin-left: auto;
    & ul {
      display: flex;
      padding: 0;
      align-items: center;
      @media screen and (max-width: 768px) {
        position: absolute;
        top: 60px;
        left: 0;
        // stacks the li tags vertically
        flex-direction: column;
        // makes menu span full height and width
        width: 100%;
        height: calc(100vh - 77px);
        background-color: white;
        border-top: 1px solid black;
        display: none;
      }
    }
    & li {
      // removes default disc bullet for li tags and applies margin to left & right side
      list-style-type: none;
      margin: 0 1.5rem;
      @media screen and (max-width: 768px) {
        // centers link text and strips off margin
        text-align: center;
        margin: 0;
        :hover {
          background-color: transparent;
        }
      }
    }
    & li a {
      // increases the surface area of the anchor tag to span more than just the anchor text
      text-decoration: none;
      display: block;
      width: 100%;
      @media screen and (max-width: 768px) {
        color: black;
        // increases the surface area of the anchor tag to span the full width of the menu
        width: 100%;
        padding: 1.5rem 0;
      }
    }
  }
  .hamburger {
    // removes default border on button element
    border: 0;
    height: 40px;
    width: 40px;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: #283b8b;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    // positions the icon to the right and center aligns it vertically
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
  .hamburger:hover {
    background-color: #2642af;
  }

  @media screen and (max-width: 768px) {
    .navigation-menu.expanded ul {
      display: block;
      background-image: url("bg.svg");
      background-size: cover;
      background-repeat: no-repeat;
      ul {
        align-items: center;
      }
    }
  }
  .button {
    width: 165px;
  }
`;
export { Nav };
