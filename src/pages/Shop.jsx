import React from "react";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";

// Styled Components for Shop Page
const ShopWrapper = styled.div`
  padding: 2rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

const Shop = () => {
  const products = [
    // Dummy products for now
    {
      id: 1,
      name: "Syltherine",
      price: "Rp 2.500.000",
      image: "/images/syltherine.jpg",
      description: "Stylish cafe chair",
    },
    {
      id: 2,
      name: "Lolito",
      price: "Rp 7.000.000",
      image: "/images/lolito.jpg",
      description: "Luxury big sofa",
    },
    {
      id: 3,
      name: "Leviosa",
      price: "Rp 2.500.000",
      image: "/images/leviosa.jpg",
      description: "Comfortable chair",
    },
    {
      id: 4,
      name: "Respira",
      price: "Rp 500.000",
      image: "/images/respira.jpg",
      description: "Outdoor table",
    },
  ];

  return (
    <ShopWrapper>
      <h1>Shop</h1>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </ShopWrapper>
  );
};

export default Shop;
