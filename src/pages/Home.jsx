import React from "react";
import styled from "styled-components";
import sofaPromotionalHeader from "../assets/images/homepage/sofa promotional header.svg";
const HomeWrapper = styled.div`
  min-height: 100vh;
`;

const TrendingProducts = styled.div`
  background-color: #f2f0ff;
  max-height: 40vh;
  display: flex;

  padding: 20px;

  @media (min-width: 768px) {
    padding: 30px;
  }

  @media (min-width: 1200px) {
    padding: 0px 370px;
  }
`;

const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Heading = styled.h2`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: #000;
  font-family: var(--font-family-secondary);
  margin-bottom: 10px;
`;

const ImageSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <TrendingProducts>
        <TextSide>
          <Heading>New Furniture Collection Trends in 2020</Heading>
          <p className="light-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>

          <button></button>
        </TextSide>

        <ImageSide>
          <img src={sofaPromotionalHeader} alt="sofa Promotional Header " />
        </ImageSide>
      </TrendingProducts>
    </HomeWrapper>
  );
};

export default Home;
