import React from "react";
import styled from "styled-components";

const CarouselItem = ({ background }) => {
  return (
    <Container>
      <img src={background} alt={background} draggable={false} />
    </Container>
  );
};

export default CarouselItem;
const Container = styled.div`
  height: 100%;
  width: 100%;
  min-width: 100%;
  position: relative;
  overflow: hidden;
  background: #f6ea5e;
  /* background: red; */

  @media (max-width: 768px) {
    display: none;
  }

  img {
    height: 55vw;
    object-fit: cover;
    right: 0;
    position: absolute;
    bottom: 0;
  }
`;
