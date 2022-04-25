import React from "react";
import styled from "styled-components";

const Button = ({ children, primary }) => {
  return <Container primary={primary}>{children}</Container>;
};

export default Button;

const Container = styled.div`
  border: 2px solid #2e2e2e;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  padding: 0.25rem 12px;
  border-radius: 8px;
  line-height: 1.5;
  text-decoration: none;
  user-select: none;
  font-weight: 500;
  cursor: pointer;
  background: ${({ primary }) => (primary ? "#2E2E2E" : "white")};
  color: ${({ primary }) => (!primary ? "#2E2E2E" : "white")};

  &:nth-child(2) {
    margin-left: 12px;
  }

  &:hover {
    background-color: #4d4d4d;
    border-color: #2e2e2e;
    color: white;
  }

  /* &:focus {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
    box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 50%);
  } */

  &:active {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
    box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 50%);
  }
`;
