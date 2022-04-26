import React from "react";
import styled from "styled-components";

const LandingNavbar = () => {
  return (
    <Container>
      <img src="/icon/buyeroad.svg" alt="buyeroad icon" />
    </Container>
  );
};

export default LandingNavbar;

const Container = styled.div`
  height: 65px;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    max-width: 200px;

    @media (max-width: 768px) {
      max-width: 150px;
    }
  }
`;
