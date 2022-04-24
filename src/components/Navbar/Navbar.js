import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { ButtonSell } from "./../Button/ButtonSell";

const Navbar = () => {
  return (
    <Container>
      <ButtonSell>Sell it!</ButtonSell>
      <RightSection>
        <Button>Log in</Button>
        <Button primary>Sign Up</Button>
        <img src="/icon/cart.svg" alt="" />
      </RightSection>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  background: white;
  padding: 20px 170px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px 23px;
  }
`;

const RightSection = styled.div`
  margin-left: auto;
  display: flex;

  img {
    margin-left: 33px;
    cursor: pointer;
  }
`;
