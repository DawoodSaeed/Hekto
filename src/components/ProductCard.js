import React from "react";
import styled from "styled-components";

// Styled Components for Product Card
const CardWrapper = styled.div`
  border: 1px solid #e0e0e0;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  background-color: #fff;
`;

const ProductImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
`;

const ProductName = styled.h2`
  font-size: 1.2rem;
  color: #333;
  margin: 0.5rem 0;
`;

const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const ProductPrice = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #ff6347;
  display: block;
  margin: 1rem 0;
`;

const AddToCartButton = styled.button`
  background-color: #ff6347;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e5533c;
  }
`;

const ProductCard = ({ product }) => {
  return (
    <CardWrapper>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>{product.price}</ProductPrice>
      <AddToCartButton>Add to Cart</AddToCartButton>
    </CardWrapper>
  );
};

export default ProductCard;
