import React from "react";
import styled from "styled-components";
import Cards from "../components/Cards.js/Cards";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "./../components/Navbar/Navbar";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <HeroSection />
      <Cards />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
`;
