import React from "react";
import styled from "styled-components";

const Buttons = ({ selected, children, onClick }) => {
  return (
    <Button onClick={() => (selected ? onClick("down") : onClick("up"))}>
      {children}
    </Button>
  );
};
const Button = styled.button`
  background-color: #fff;
  border: none;
  color: #aaa;
  cursor: pointer;
  font-size: 16px;
  padding: 15px;

  position: absolute;
  left: 35%;
  top: 50%;
  z-index: 100;
  &:hover {
    color: #222;
  }

  &:focus {
    outline: none;
  }
`;

export default Buttons;
