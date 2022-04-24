import React from "react";
import styled from "styled-components";

const CarouselMobile = ({ background }) => {
  return (
    <Container>
      <img src={background} alt={background} draggable={false} />
    </Container>
  );
};

export default CarouselMobile;

const Container = styled.div`
  height: 100%;
  width: 100%;
  min-width: 100%;
  position: relative;
  overflow: hidden;
  background: #f6ea5e;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    margin-top: 50px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    bottom: 0;
  }
`;
