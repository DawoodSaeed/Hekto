import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import product1 from "../assets/images/products/image 1.svg";
import product2 from "../assets/images/products/image 3.svg";
import product3 from "../assets/images/products/image 1168.svg";
import product4 from "../assets/images/products/image 1169.svg";
import ProductCard from "./ProductCard";
import Heading from "./Heading";

const SliderContainer = styled.div`
  padding: 20px;
  text-align: center;
  ${(props) => props.customStyle}

  @media (min-width: 768px) {
    padding: 40px;
  }

  @media (min-width: 1200px) {
    padding: 10px 71px;
  }

  @media (min-width: 1440px) {
    padding: 0px 400px;
  }

  .slick-slide {
    padding: 0 10px;
  }

  .slick-dots {
    bottom: -30px;
    li {
      width: 20px;
      height: 4px;
      margin: 0 5px;
      button {
        width: 100%;
        height: 100%;
        padding: 0;
        &:before {
          content: "";
          width: 100%;
          height: 100%;
          background-color: var(--color-pink);
          border-radius: 2px;
          opacity: 0.25;
        }
      }
      &.slick-active {
        width: 30px;
        button:before {
          opacity: 1;
        }
      }
    }
  }
`;

// The React component
const ProductSlider = ({ title, style }) => {
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
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SliderContainer customStyle={style}>
      <Heading>{title}</Heading>
      <Slider {...settings}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default ProductSlider;
