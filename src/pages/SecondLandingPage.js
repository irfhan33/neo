import React from "react";
import styled from "styled-components";
import ButtonsHero from "../components/ButtonsHero/ButtonsHero";
import LandingNavbar from "./../components/Navbar/LandingNavbar";
import { Title } from "./StartSellingPage";

const SecondLandingPage = () => {
  return (
    <Container>
      <Wrapper>
        <LandingNavbar />
        <Box>
          <LeftSection>
            <TitleModif>
              Be a good seller, <br /> know your products and <br />
              assist your buyers
            </TitleModif>
            <ButtonsHero left />
          </LeftSection>
          <RightSection>
            <image src="/background/hero.svg" alt="hero image" />
          </RightSection>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default SecondLandingPage;

const Container = styled.div`
  background: #fef8af;
  min-height: 100vh;
  padding-bottom: 30px;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 20px;
    margin-top: 30px;
  }
`;

const TitleModif = styled(Title)`
  text-align: left;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const LeftSection = styled.div`
  width: 100%;
`;

const RightSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 80%;
    height: 100%;
  }
`;
