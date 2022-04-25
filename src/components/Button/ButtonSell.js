import styled from "styled-components";

export const ButtonSell = styled.div`
  background: #2e2e2e;
  display: inline-flex;
  border-radius: 8px;
  color: #fef261;
  font-weight: 700;
  cursor: pointer;
  padding: 0.25rem 12px;
  font-size: 0.875rem;
  border: 1px solid transparent;
  line-height: 1.5;
  text-decoration: none;
  user-select: none;

  /* &:focus {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
    box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 50%);
  } */

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
`;
