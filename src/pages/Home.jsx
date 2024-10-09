import React from "react";
import styled from "styled-components";
import { Slider, ProductSlider, Heading, ProductCard } from "../components";

import product1 from "../assets/images/products/image 1.svg";
import product2 from "../assets/images/products/image 3.svg";
import product3 from "../assets/images/products/image 1168.svg";
import product4 from "../assets/images/products/image 1169.svg";

const HomeWrapper = styled.div``;
const ProductsWrapper = styled.div`
  padding: 20px;
  margin-top: 90px;
  text-align: center;
  @media (min-width: 768px) {
    padding: 40px;
  }

  @media (min-width: 1200px) {
    padding: 10px 71px;
  }

  @media (min-width: 1440px) {
    padding: 0px 400px;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const products = [
  {
    name: "Castlview Chair",
    code: "YX999",
    price: "$1432",
    image: product1,
  },
  {
    name: "Castlview Chair",
    code: "YX998",
    price: "$1532",
    image: product2,
  },
  {
    name: "Castlview Chair",
    code: "YX997",
    price: "$1632",
    image: product3,
  },
  {
    name: "Castlview Chair",
    code: "YX996",
    price: "$1732",
    image: product4,
  },

  {
    name: "Castlview Chair",
    code: "YX997",
    price: "$1632",
    image: product3,
  },
  {
    name: "Castlview Chair",
    code: "YX996",
    price: "$1732",
    image: product4,
  },
];

const Home = () => {
  return (
    <HomeWrapper>
      <Slider />
      <ProductSlider style={`margin-top: 90px;`} title="Featured Products" />

      <ProductsWrapper>
        <Heading>Trending Products</Heading>

        <ProductsGrid>
          {products.map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })}
        </ProductsGrid>
      </ProductsWrapper>
    </HomeWrapper>
  );
};

export default Home;
