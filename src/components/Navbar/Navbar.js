import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { ButtonSell } from "./../Button/ButtonSell";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [offset, setOffset] = useState(false);

  useEffect(() => {
    if (offset) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [offset]);

  return (
    <Container>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <ButtonSell>Sell it!</ButtonSell>
      </Link>

      <RightSection>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button>Log in</Button>
        </Link>
        <Link
          to="/signup"
          style={{ textDecoration: "none", marginLeft: "12px" }}
        >
          <Button primary>Sign Up</Button>
        </Link>
        <ShoppingCartOutlinedIcon className="cart-icon" />
      </RightSection>

      {/* Mobile Right Section */}
      <RightSectionMobile>
        <ShoppingCartOutlinedIcon className="cart-icon" />
        <img
          src="/icon/menu.svg"
          alt="menu icon"
          onClick={() => setOffset(true)}
        />
      </RightSectionMobile>

      {/* Offset Sidebar */}

      <OffsetSidebar offset={offset ? 1 : 0}>
        <Link
          to="/login"
          style={{
            textDecoration: "none",
          }}
        >
          <ButtonSidebar>Login</ButtonSidebar>
        </Link>

        <Link
          to="/signup"
          style={{ textDecoration: "none" }}
          onClick={() => setOffset(false)}
        >
          <ButtonSidebarPrimary>Sign Up</ButtonSidebarPrimary>
        </Link>
        <CloseButton src="/icon/close.svg" onClick={() => setOffset(false)} />
      </OffsetSidebar>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  background: white;
  padding: 18px 0;
  display: flex;
  align-items: center;
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;
`;

const RightSection = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  .cart-icon {
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
  align-items: center;

  .cart-icon {
    cursor: pointer;
  }

  img {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const OffsetSidebar = styled.div`
  position: fixed;
  background: #2e2e2e;
  top: 0;
  bottom: 0;
  right: 0;
  left: ${({ offset }) => (offset ? "0px" : "100%")};
  z-index: 9999;
  display: none;
  flex-direction: column;
  padding: 0 24px;
  min-width: 100vw;
  transition: all 250ms;
  @media (max-width: 768px) {
    display: block;
  }
`;

const ButtonSidebar = styled.div`
  color: white;
  border: 2px solid white;
  font-weight: 600;
  padding: 0.25rem 12px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  font-size: 14px;
  margin-top: 130px;
  text-decoration: none;
  user-select: none;
  &:hover {
    background-color: #4d4d4d;
    color: white;
  }

  &:active {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
    box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 50%);
  }
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
  right: 20px;
  top: 24px;
  cursor: pointer;
`;
