import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { ButtonSell } from "./../Button/ButtonSell";

const Navbar = () => {
  const [offset, setOffset] = useState(false);

  return (
    <Container>
      <ButtonSell>Sell it!</ButtonSell>
      <RightSection>
        <Button>Log in</Button>
        <Button primary>Sign Up</Button>
        <img src="/icon/cart.svg" alt="cart icon" />
      </RightSection>

      {/* Mobile Right Section */}
      <RightSectionMobile>
        <img src="/icon/cart.svg" alt="cart icon" />
        <img
          src="/icon/menu.svg"
          alt="menu icon"
          onClick={() => setOffset(true)}
        />
      </RightSectionMobile>

      {/* Offset Sidebar */}

      <OffsetSidebar offset={offset}>
        <ButtonSidebar>Login</ButtonSidebar>
        <ButtonSidebarPrimary>Sign Up</ButtonSidebarPrimary>
        <CloseButton src="/icon/close.svg" onClick={() => setOffset(false)} />
      </OffsetSidebar>
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightSectionMobile = styled.div`
  margin-left: auto;
  gap: 14px;
  display: none;
  img {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const OffsetSidebar = styled.div`
  position: absolute;
  background: #2e2e2e;
  top: 0;
  bottom: 0;
  right: 0;
  left: ${({ offset }) => (offset ? "0px" : "100%")};
  z-index: 99;
  display: none;
  flex-direction: column;
  padding: 0 24px;
  min-width: 100vw;
  transition: all 250ms;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const ButtonSidebar = styled.div`
  color: white;
  border: 3px solid white;
  border-radius: 12px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-top: 130px;
`;

const ButtonSidebarPrimary = styled(ButtonSidebar)`
  background: white;
  color: #2e2e2e;
  margin-top: 22px;
`;

const CloseButton = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 24px;
  top: 24px;
`;
