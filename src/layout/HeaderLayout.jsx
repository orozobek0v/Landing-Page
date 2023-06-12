import React from "react";
import styled from "styled-components";
import Hamburger from "./NavLayout/Hamburger";

const Header = () => {
  return (
    <Nav>
      <h1>
        AkSoft <span>Dev</span>
      </h1>
      <Hamburger />
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  width: 100%;
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center ;
  position: absolute;
  z-index: 22;
  h1 {
    color: #fff;
    font-size: 2.5vw;
    span {
      color: red;
    }
  }
  @media only screen and (max-width: 768px) {
   h1{
    font-size: 100%;
   }
  }
`;
