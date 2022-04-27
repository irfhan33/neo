import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { ButtonSell } from "./../Button/ButtonSell";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { ButtonSearch, SearchWrapper } from "../HeroSection/HeroSection";

const ShopNavbar = () => {
  const [offset, setOffset] = useState(false);

  useEffect(() => {
    if (offset) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [offset]);

  return (
    <Outer>
      <Container>
        <LeftSection>
          <Logo>
            <img src="/icon/buyeroad.svg" alt="buyeroad icon" />
          </Logo>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Sell>Sell it!</Sell>
          </Link>
          <Search>
            <input type="text" placeholder="Search" />
            <ButtonSearch>
              <SearchIcon className="icon-search" />
            </ButtonSearch>
          </Search>
        </LeftSection>

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
          <Link
            to="/login"
            style={{ textDecoration: "none" }}
            onClick={() => setOffset(false)}
          >
            <ButtonSidebarSellit>Sell It</ButtonSidebarSellit>
          </Link>
          <CloseButton src="/icon/close.svg" onClick={() => setOffset(false)} />
        </OffsetSidebar>
      </Container>
    </Outer>
  );
};

export default ShopNavbar;

const Outer = styled.div`
  box-shadow: rgb(0 0 0 / 7%) 0px 4px 6px -1px;
`;

const Container = styled.div`
  background: white;
  padding: 18px 0;
  display: flex;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
`;

const RightSection = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  margin-left: 12px;

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
  margin-left: 12px;
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

const ButtonSidebarSellit = styled(ButtonSidebarPrimary)`
  background-color: transparent;
  color: #fef261;
`;

const CloseButton = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
  top: 24px;
  cursor: pointer;
`;

const Logo = styled.div`
  height: 100%;
  cursor: pointer;
  margin-right: 12px;

  img {
    height: 100%;
    width: 100%;
  }
`;

const Search = styled(SearchWrapper)`
  margin-top: 0;
  flex-grow: 1;
  height: 34px;

  input {
    max-width: none;
    width: 50px;
  }

  @media (max-width: 768px) {
    margin-rigth: 30px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

const Sell = styled(ButtonSell)`
  margin-right: 12px;

  @media (max-width: 768px) {
    display: none;
  }
`;
