import React from "react";
import styled from "styled-components";

const BoxWrapper = ({ children }) => {
  return <Container>{children}</Container>;
};

export default BoxWrapper;

const Container = styled.div`
  background: white;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.18);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  overflow: hidden;
`;

export const BoxWrapperFooter = ({ children }) => {
  return <ContainerFooter>{children}</ContainerFooter>;
};

const ContainerFooter = styled.div`
  background: #2e2e2e;
  color: white;
  margin-left: -40px;
  margin-right: -40px;
  display: flex;
  width: calc(100% + 40px);
  justify-content: center;
  padding: 38px 0px;
  text-decoration: none;
  user-select: none;
  font-size: 14px;

  span {
    color: #fef261;
    display: inline-flex;
    margin-left: 5px;
    cursor: pointer;
  }
`;

export const BoxWrapperTitle = ({ children }) => {
  return <ContainerTitle>{children}</ContainerTitle>;
};

const ContainerTitle = styled.h3`
  margin: 64px;
  display: inline-block;
  font-size: 26px;
`;
