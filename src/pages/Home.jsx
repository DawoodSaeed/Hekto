import React, { useState } from "react";
import styled from "styled-components";
import { Slider, ProductSlider, Heading } from "../components";

import product1 from "../assets/images/products/image 1.svg";
import product2 from "../assets/images/products/image 3.svg";
import product3 from "../assets/images/products/image 1168.svg";
import product4 from "../assets/images/products/image 1169.svg";
import ProductCardV2 from "../components/ProductCardv2";
import ProductGrid from "../components/ProductGrid";

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

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const MenuItem = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin: 0 10px;
  padding: 5px 10px;
  transition: all 0.3s ease-in;
  border-bottom: 1px solid transparent;
  font-weight: var(--font-weight-semibold);
  color: ${(props) =>
    props.active ? "var(--color-pink)" : "var(--color-blue)"};
  border-color: ${(props) =>
    props.active ? "var(--color-sky-blue)" : "transparent"};
`;

const newArrivals = [
  {
    id: 1,
    name: "Elegant Armchair",
    oldPrice: "$999",
    price: "$899",
    image: product1,
  },
  {
    id: 2,
    name: "Modern Dining Chair",
    oldPrice: "$1099",
    price: "$949",
    image: product2,
  },
  {
    id: 3,
    name: "Stylish Coffee Table",
    oldPrice: "$599",
    price: "$499",
    image: product3,
  },
  {
    id: 4,
    name: "Contemporary Bookshelf",
    oldPrice: "$799",
    price: "$699",
    image: product4,
  },
  {
    id: 5,
    name: "Minimalist Floor Lamp",
    oldPrice: "$349",
    price: "$299",
    image: product1,
  },
  {
    id: 6,
    name: "Cozy Throw Pillow Set",
    oldPrice: "$129",
    price: "$99",
    image: product2,
  },
];

const bestSellers = [
  {
    id: 7,
    name: "Luxurious Sofa",
    oldPrice: "$1299",
    price: "$1199",
    image: product3,
  },
  {
    id: 8,
    name: "Ergonomic Office Chair",
    oldPrice: "$699",
    price: "$599",
    image: product4,
  },
  {
    id: 9,
    name: "Modern Dining Set",
    oldPrice: "$1599",
    price: "$1399",
    image: product1,
  },
  {
    id: 10,
    name: "Compact Writing Desk",
    oldPrice: "$449",
    price: "$399",
    image: product2,
  },
  {
    id: 11,
    name: "Plush Area Rug",
    oldPrice: "$279",
    price: "$229",
    image: product3,
  },
  {
    id: 12,
    name: "Sleek TV Stand",
    oldPrice: "$549",
    price: "$479",
    image: product4,
  },
];

const featured = [
  {
    id: 13,
    name: "Vintage Rocking Chair",
    oldPrice: "$599",
    price: "$499",
    image: product1,
  },
  {
    id: 14,
    name: "Industrial Bar Stool",
    oldPrice: "$299",
    price: "$249",
    image: product2,
  },
  {
    id: 15,
    name: "Rustic Wooden Bench",
    oldPrice: "$449",
    price: "$379",
    image: product3,
  },
  {
    id: 16,
    name: "Scandinavian Side Table",
    oldPrice: "$349",
    price: "$299",
    image: product4,
  },
  {
    id: 17,
    name: "Bohemian Macramé Wall Hanging",
    oldPrice: "$89",
    price: "$69",
    image: product1,
  },
  {
    id: 18,
    name: "Mid-Century Modern Accent Chair",
    oldPrice: "$649",
    price: "$549",
    image: product2,
  },
];

const specialOffers = [
  {
    id: 19,
    name: "Leather Recliner",
    oldPrice: "$999",
    price: "$799",
    image: product3,
  },
  {
    id: 20,
    name: "Glass Dining Table",
    oldPrice: "$899",
    price: "$749",
    image: product4,
  },
  {
    id: 21,
    name: "Velvet Accent Chair",
    oldPrice: "$599",
    price: "$499",
    image: product1,
  },
  {
    id: 22,
    name: "Marble Top Console",
    oldPrice: "$799",
    price: "$649",
    image: product2,
  },
  {
    id: 23,
    name: "Geometric Pendant Light",
    oldPrice: "$249",
    price: "$199",
    image: product3,
  },
  {
    id: 24,
    name: "Floating Wall Shelves Set",
    oldPrice: "$179",
    price: "$149",
    image: product4,
  },
];

const Home = () => {
  const [activeMenu, setActiveMenu] = useState("newArrivals");

  const getActiveProducts = () => {
    switch (activeMenu) {
      case "newArrivals":
        return newArrivals;
      case "bestSellers":
        return bestSellers;
      case "featured":
        return featured;
      case "specialOffers":
        return specialOffers;
      default:
        return newArrivals;
    }
  };

  return (
    <HomeWrapper>
      <Slider />
      <ProductSlider style={`margin-top: 90px;`} title="Featured Products" />

      <ProductsWrapper>
        <Heading>Latest Products</Heading>

        <MenuWrapper>
          <MenuItem
            active={activeMenu === "newArrivals"}
            onClick={() => setActiveMenu("newArrivals")}
          >
            New Arrivals
          </MenuItem>
          <MenuItem
            active={activeMenu === "bestSellers"}
            onClick={() => setActiveMenu("bestSellers")}
          >
            Best Sellers
          </MenuItem>
          <MenuItem
            active={activeMenu === "featured"}
            onClick={() => setActiveMenu("featured")}
          >
            Featured
          </MenuItem>
          <MenuItem
            active={activeMenu === "specialOffers"}
            onClick={() => setActiveMenu("specialOffers")}
          >
            Special Offers
          </MenuItem>
        </MenuWrapper>

        <ProductGrid products={getActiveProducts()} />
        {/* 
          This approach is generally a good practice. It separates the logic for
          determining which products to display (getActiveProducts) from the
          rendering of those products (ProductGrid component). This separation
          of concerns makes the code more maintainable and easier to understand.

          However, there are a few potential improvements to consider:

          1. Performance: If the product lists are large, you might want to
             consider memoizing the getActiveProducts function or its result
             using useMemo to prevent unnecessary recalculations.

          2. Loading state: You might want to add a loading state while
             products are being fetched (if they're coming from an API).

          3. Error handling: Consider adding error handling in case
             getActiveProducts fails for any reason.

          4. Empty state: You could add a check for when getActiveProducts
             returns an empty array and display a message to the user.

          Example with these improvements:

          const activeProducts = useMemo(() => getActiveProducts(), [activeMenu]);

          return (
            {isLoading ? (
              <LoadingSpinner />
            ) : error ? (
              <ErrorMessage error={error} />
            ) : activeProducts.length === 0 ? (
              <NoProductsMessage />
            ) : (
              <ProductGrid products={activeProducts} />
            )}
          );

          This approach would make your component more robust and user-friendly.
        */}
      </ProductsWrapper>
    </HomeWrapper>
  );
};

export default Home;
