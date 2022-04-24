import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CarouselItem from "./CarouselItem";
import CarouselMobile from "./CarouselMobile";

const HeroSection = () => {
  return (
    <>
      <Container>
        {/* Carousel Desktop Hidden in Tablet */}
        <CarouselItem background="/background/bg-1.jpg" />
        <CarouselItem background="/background/bg-2.jpg" />
        <CarouselItem background="/background/bg-3.jpg" />
        <CarouselItem background="/background/bg-4.jpg" />

        {/* Carousel Mobile, Hidden in Desktop */}
        <CarouselMobileWrapper>
          <CarouselMobile background="/background/bg-1-mobile.jpg" />
          <CarouselMobile background="/background/bg-2-mobile.jpg" />
          <CarouselMobile background="/background/bg-3-mobile.jpg" />
          <CarouselMobile background="/background/bg-4-mobile.jpg" />
        </CarouselMobileWrapper>
        {/* Title and Text */}
        <TextWrapper>
          <h1>
            <span>Here! </span>
            You'll find <br /> everything what <br />
            you've been looking for!
          </h1>
          <SearchWrapper>
            <input type="text" placeholder="Search" />
            <ButtonSearch>
              <img src="/icon/search.svg" alt="search icon" />
            </ButtonSearch>
          </SearchWrapper>
        </TextWrapper>
      </Container>
    </>
  );
};

export default HeroSection;

const Container = styled.div`
  height: 835px;
  display: flex;
  position: relative;
  /* animation: slide 20s infinite; */

  @media (max-width: 768px) {
    height: auto;
    background: #f6ea5e;
    flex-direction: column-reverse;
  }
`;

const TextWrapper = styled.div`
  position: absolute;
  padding: 0 170px;
  margin-top: 14vw;
  width: 100%;

  @media (max-width: 768px) {
    position: relative;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  h1 {
    font-size: 48px;

    @media (max-width: 1024px) {
      font-size: 44px;
    }

    @media (max-width: 500px) {
      font-size: 38px;
    }

    @media (max-width: 375px) {
      font-size: 30px;
    }
  }

  span {
    color: #ff0000;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 33px;
  height: 50px;

  input {
    border: 3px solid #2e2e2e;
    border-radius: 12px;
    background: none;
    padding: 0 20px;
    font-size: 18px;
    color: #2e2e2e;
    flex: 1 1 auto;
    height: 100%;
    min-width: 100px;
    max-width: 340px;
    &::placeholder {
      font-size: 18px;
      color: #2e2e2e;
    }

    &:focus {
      outline: none;
    }
  }
`;

const ButtonSearch = styled.div`
  background: #2e2e2e;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  padding: 0 16px;
  border-radius: 12px;
  cursor: pointer;
`;

const CarouselMobileWrapper = styled.div`
  /* animation: slide 20s infinite; */
  display: flex;
`;
