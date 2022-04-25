import React from "react";
import styled from "styled-components";
import Cards from "../components/Cards.js/Cards";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "./../components/Navbar/Navbar";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
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
  max-width: 100vw;
  position: relative;
`;
