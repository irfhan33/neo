import React from "react";
import styled from "styled-components";

const CardItem = ({ title, image }) => {
  return (
    <Container>
      <img src={image} alt="Card {image}" />
      <span>{title}</span>
    </Container>
  );
};

export default CardItem;

const Container = styled.div`
  padding: 40px 30px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  background: white;

  @media (max-width: 1100px) {
    align-items: center;
    flex-direction: column;
  }

  img {
    width: 100%;
    height: 100%;
    max-width: 50px;
    max-height: 50px;
  }

  span {
    margin-left: 17px;
    font-size: 12px;

    @media (max-width: 1100px) {
      margin-left: 0;
      margin-top: 17px;
    }
  }
`;
