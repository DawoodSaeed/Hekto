import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled components

const Title = styled.h2`
  font-size: 1rem;
  color: var(--color-blue);
  margin: 0;
  border-bottom: 1px solid var(--color-pantone-purple);
  padding-bottom: 4px;
  position: relative;
  z-index: 1;
  text-align: left;
  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0px;
    left: 0;
    height: 100%;
    width: 0%;
    background-color: var(--color-blue);
    transition: width 0.3s ease-in-out;
    z-index: -1;
  }
  &:hover {
    color: white;
  }
  &:hover::after {
    width: 100%;
  }
`;

const Image = styled.img`
  width: auto;
  height: 229px; // Fixed height for image
  max-height: 229px;
  object-fit: contain; // Maintain aspect ratio without cropping
  transition: all 0.3s ease-in-out;
  transform-origin: center;
`;

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 8px;
  height: 100%; // Ensure all cards have the same height
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.3s ease-in-out;

  &:hover ${Image} {
    transform: scale(1.05) rotate(2deg);
  }
  &:hover ${Title} {
    color: white;
  }
  &:hover ${Title}::after {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 270px; // Max height for image container
  max-height: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  background-color: #f7f7f7;
  padding: 16px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

const CurrentPrice = styled.span`
  font-size: 1.2rem;
  color: var(--color-blue);
  margin-right: 8px;
`;

const OldPrice = styled.span`
  font-size: 1rem;
  color: var(--color-pink);
  text-decoration: line-through;
  font-weight: var(--font-weight-semibold);
`;

// ProductCard component
const ProductCardV2 = ({ product }) => {
  const { image, name: title, price: currentPrice, oldPrice, id } = product;

  return (
    <Card to={`/product/${id}`}>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <InfoContainer>
        <Title>{title}</Title>
        <PriceContainer>
          <CurrentPrice>{currentPrice}</CurrentPrice>
          <OldPrice>{oldPrice}</OldPrice>
        </PriceContainer>
      </InfoContainer>
    </Card>
  );
};

export default ProductCardV2;
