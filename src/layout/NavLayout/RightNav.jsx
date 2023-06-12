import React from "react";
import styled from "styled-components";

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>Portfolio</li>
      <li>About Us</li>
      <li>Contact Us</li>
    </Ul>
  );
};
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 0 10px;
    font-size: 1.5vw;
    color: #fff;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    display: ${({ open }) => (open ? "block" : "none")};

    background: ${({ open }) => (open ? "red" : "none")};
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
    width: 50%;
    height: 100vh;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 20;

    li:nth-child(1) {
      padding-top: 20%;
    }

    li {
      color: #fff;
      margin-bottom: 10%;
    }
  }
`;

export default RightNav;
