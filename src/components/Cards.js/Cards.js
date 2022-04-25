import React from "react";
import styled from "styled-components";
import CardItem from "./CardItem";

const Cards = () => {
  return (
    <Container>
      <CardItem
        title="The only marketplace 24h real-time assistance in chat with our team of
        experts."
        image="/icon/card-1.svg"
      />
      <CardItem
        title="Secure payments with PayPal, credit and debit card or you can decide to pay in installments. The first marketplace to accept installment payments."
        image="/icon/card-2.svg"
      />
      <CardItem
        title="All our shipments are free delivery. All our shipments are fast tracking delivery."
        image="/icon/card-3.svg"
      />
    </Container>
  );
};

export default Cards;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  grid-gap: 30px;
  z-index: 10;
  position: relative;
  padding-bottom: 37px;
  margin-top: -5%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: 768px) {
    padding: 20px 20px;
    margin-top: -17%;
  }

  @media (max-width: 585px) {
    margin-top: -24%;
    grid-gap: 24px;
  }

  @media (max-width: 400px) {
    margin-top: -35%;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
