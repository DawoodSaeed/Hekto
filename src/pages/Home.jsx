import React from "react";
import styled from "styled-components";
import { Slider, ProductSlider } from "../components";

const HomeWrapper = styled.div``;

const Home = () => {
  return (
    <HomeWrapper>
      <Slider />
      <ProductSlider style={`margin: 90px 0px;`} title="Featured Products" />
      <ProductSlider style={`margin-bottom: 90px;`} title="New Arrivals" />
    </HomeWrapper>
  );
};

export default Home;
