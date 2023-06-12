import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Burger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burger>
      <RightNav open={open} />
    </>
  );
};

const Burger = styled.div`
  width: 40%;
  height: 2rem;
  position: fixed;
  top: 1%;
  right: 3%;
  display: none;
  z-index: 21;
  div {
    width: 11%;
    height: 10%;
    background: ${({ open }) => (open ? "#fff" : "#000")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media only screen and (max-width: 768px) {
    width: 1.7rem;
    height: 1.7rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    top: 0;
    div{
      width: auto;
      height: 0.20rem;
    }
  }
  @media only screen and (max-width: 550px) {
    width: 1.7rem;
    height: 1.7rem;
    position: fixed;
    top: 0;
    right: 2%;
    div{
      width: auto;
      height: 0.20rem;
    }
  }
`;
export default Hamburger;
