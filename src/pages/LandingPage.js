import React from "react";
import styled from "styled-components";
import LandingNavbar from "./../components/Navbar/LandingNavbar";
import ButtonsHero from "./../components/ButtonsHero/ButtonsHero";

const LandingPage = () => {
  return (
    <Container>
      <LandingNavbar />
      <Wrapper>
        <ButtonsHero />
        <Title>
          Be a good seller, know your products <br /> and assist your buyers
        </Title>
      </Wrapper>
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  min-height: 100vh;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  &:before {
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background: #fef8af;
    bottom: 0;
    z-index: -1;
    background-image: url("/background/background-landing.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 80%;
    background-attachment: absolute;

    @media (max-width: 768px) {
      background-size: 100%;
    }
  }
`;

const Wrapper = styled.div`
  padding: 0 20px;
  top: 40%;
  position: absolute;
  transform: translateY(-50%);
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 32px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 510px) {
    font-size: 20px;
  }
  @media (max-width: 430px) {
    font-size: 16px;
  }
`;
