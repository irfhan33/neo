import React from "react";
import styled from "styled-components";
import ShopNavbar from "./../components/Navbar/ShopNavbar";
import Carousel from "./../components/Carousel/Carousel";
import Description from "../components/Description/Description";
import Title from "./../components/Title/Title";
import Review from "../components/Review/Review";
import Footer from "../components/Footer/Footer";

const Shop = () => {
  return (
    <Container>
      <ShopNavbar />
      <Content>
        <Carousel />
        <Description />
        <Title />
        <Review />
        <Footer />
      </Content>
    </Container>
  );
};

export default Shop;

const Container = styled.div``;
const Content = styled.div`
  flex: 1 1 auto;
  display: grid;
  grid-gap: 10px;
  padding: 20px 20px 20px 20px;
  grid-template-columns: 60% 40%;
  grid-template-areas:
    "carousel title"
    "carousel review"
    "description review"
    "description footer";

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: 30% auto auto auto auto;
    grid-template-areas:
      "carousel"
      "title"
      "description"
      "review"
      "footer";
  }

  @media (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: 70vh auto auto auto auto;
    grid-template-areas:
      "carousel"
      "title"
      "description"
      "review"
      "footer";
  }
`;
