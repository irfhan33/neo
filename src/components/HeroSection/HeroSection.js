import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CarouselItem from "./CarouselItem";
import CarouselMobile from "./CarouselMobile";
import SearchIcon from "@mui/icons-material/Search";

const HeroSection = () => {
  return (
    <>
      <Container>
        {/* Carousel Desktop Hidden in Tablet */}
        <CarouselDesktopWrapper>
          <CarouselItem
            background="/background/bg-1.jpg"
            className="carousel-1"
          />
          <CarouselItem
            background="/background/bg-2.jpg"
            className="carousel-2"
          />
          <CarouselItem
            background="/background/bg-3.jpg"
            className="carousel-3"
          />
          <CarouselItem
            background="/background/bg-4.jpg"
            className="carousel-4"
          />
        </CarouselDesktopWrapper>

        {/* Carousel Mobile, Hidden in Desktop */}
        <CarouselMobileWrapper>
          <CarouselMobile
            background="/background/bg-1-mobile.jpg"
            className="carousel-1"
          />
          <CarouselMobile
            background="/background/bg-2-mobile.jpg"
            className="carousel-2"
          />
          <CarouselMobile
            background="/background/bg-3-mobile.jpg"
            className="carousel-3"
          />
          <CarouselMobile
            background="/background/bg-4-mobile.jpg"
            className="carousel-4"
          />
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
              <SearchIcon className="icon-search" />
            </ButtonSearch>
          </SearchWrapper>
        </TextWrapper>
      </Container>
    </>
  );
};

export default HeroSection;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    height: auto;
    background: #f6ea5e;
    animation: none;
    flex-direction: column-reverse;
  }
`;

const CarouselDesktopWrapper = styled.div`
  height: 600px;
  position: relative;
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }

  .carousel-1 {
    animation: fade-1 20s infinite;
  }
  .carousel-2 {
    animation: fade-2 20s infinite;
  }
  .carousel-3 {
    animation: fade-3 20s infinite;
  }
  .carousel-4 {
    animation: fade-4 20s infinite;
  }
`;

const TextWrapper = styled.div`
  position: absolute;
  padding: 0 170px;
  width: 100%;
  top: 7vw;
  z-index: 999;
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
  height: 40px;

  input {
    border: 2px solid #2e2e2e;
    border-radius: 8px;
    background: none;
    padding: 0 14px;
    font-size: 14px;
    color: #2e2e2e;
    flex: 1 1 auto;
    height: 100%;
    min-width: 100px;
    max-width: 340px;

    &:focus {
      background-color: white;
      border-color: #0a58ca;
      box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 50%);
    }

    &::placeholder {
      font-size: 14px;
      color: #2e2e2e;
    }

    &:focus {
      outline: none;
    }
  }

  img {
    width: 18px;
    height: 20px;
  }
`;

const ButtonSearch = styled.div`
  background: #2e2e2e;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border-radius: 8px;
  cursor: pointer;
  padding: 10px;
  user-select: none;

  &:active {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
    box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 50%);
  }

  &:hover {
    background-color: #4d4d4d;
    border-color: #2e2e2e;
    color: white;
  }
  .icon-search {
    color: #f6ea5e;
  }
`;

const CarouselMobileWrapper = styled.div`
  display: none;
  position: relative;
  height: 120vw;

  @media (max-width: 768px) {
    display: flex;
  }
  .carousel-1 {
    animation: fade-1 20s infinite;
  }
  .carousel-2 {
    animation: fade-2 20s infinite;
  }
  .carousel-3 {
    animation: fade-3 20s infinite;
  }
  .carousel-4 {
    animation: fade-4 20s infinite;
  }
`;
