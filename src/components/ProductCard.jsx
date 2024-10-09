import React from "react";
import styled from "styled-components";
const ProductInfo = styled.div`
  padding-top: 10px;
  text-align: center;
  width: 100%;
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
`;

const ProductName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #ff0077;
`;

const ProductCode = styled.p`
  color: #333;
  font-size: 14px;
`;

const ProductPrice = styled.p`
  color: #333;
  font-size: 14px;
`;

const ProductCardWrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 300px;
  height: 300px;
  display: grid !important;
  grid-template-rows: 2fr 1fr;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    ${ProductInfo} {
      background-color: var(--color-blue);

      ${ProductName}, ${ProductCode}, ${ProductPrice} {
        color: white;
      }
    }
  }
`;

const ProductImage = styled.img`
  object-fit: cover;
  width: 60%;
  height: 100%;
  margin: 0 auto;
`;

const ProductImageContainer = styled.div`
  grid-row: 1/2;
  background-color: #f6f7fb;
`;
const ProductCard = ({ product, index }) => {
  return (
    <ProductCardWrapper key={index}>
      <ProductImageContainer>
        <ProductImage src={product.image} alt={product.name} />
      </ProductImageContainer>
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductCode>Code: {product.code}</ProductCode>
        <ProductPrice>{product.price}</ProductPrice>
      </ProductInfo>
    </ProductCardWrapper>
  );
};

export default ProductCard;
