import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonsHero = ({ left }) => {
  return (
    <Buttons left={left}>
      <ButtonPrimary to="/product">Start Selling</ButtonPrimary>
      <ButtonSecondary to="/product">Your Products</ButtonSecondary>
    </Buttons>
  );
};

export default ButtonsHero;

const Buttons = styled.div`
  display: flex;
  justify-content: ${({ left }) => (left ? "flex-start" : "center")};
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 12px;
  }
`;

const ButtonPrimary = styled(Link)`
  display: flex;
  flex-grow: 1;
  max-width: 200px;
  background: white;
  background: #2e2e2e;
  display: inline-flex;
  border-radius: 8px;
  color: #fef261;
  font-weight: 600;
  cursor: pointer;
  padding: 8px 10px;
  font-size: 18px;
  border: 1px solid transparent;
  text-decoration: none;
  user-select: none;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #4d4d4d;
    border-color: #2e2e2e;
    color: white;
  }

  &:active {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
    box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 50%);
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ButtonSecondary = styled(ButtonPrimary)`
  background: transparent;
  border: 3px solid #2e2e2e;
  color: #2e2e2e;
`;
