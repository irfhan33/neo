import React from "react";
import styled from "styled-components";

const Button = ({ children, primary }) => {
  return <Container primary={primary}>{children}</Container>;
};

export default Button;

const Container = styled.div`
  border: 2px solid #2e2e2e;
  width: 66px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border-radius: 5px;
  margin-right: 12px;
  cursor: pointer;
  background: ${({ primary }) => (primary ? "#2E2E2E" : "white")};
  color: ${({ primary }) => (!primary ? "#2E2E2E" : "white")};
`;
