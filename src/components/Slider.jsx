import sofaPromotionalHeader from "../assets/images/homepage/sofa promotional header.svg";
import { Button } from "../components";
import bulb from "../assets/images/homepage/bulb.svg";
import styled from "styled-components";

const TrendingProducts = styled.div`
  background-color: #f2f0ff;
  padding: 20px;
  display: flex;
  height: 85vh;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 40px;
  }

  @media (min-width: 1200px) {
    padding: 10px 71px;
  }

  @media (min-width: 1440px) {
    padding: 10px 200px 10px 400px;
  }
`;

const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    flex: 1;
    align-items: flex-start;
    text-align: left;
    margin-bottom: 100px;
  }
`;

const Heading = styled.h2`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: #000;
  font-family: var(--font-family-secondary);
  margin: 20px 0px;
  @media (min-width: 768px) {
    font-size: var(--font-size-2xl);
  }

  @media (min-width: 1200px) {
    font-size: 2.86vw;
    line-height: 3.4vw;
  }
`;

const ImageSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: auto;
    height: auto;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    flex: 1;
  }
`;

const BulbImage = styled.img`
  position: absolute;
  top: 0px;
  left: 0;
  display: none;

  @media (min-width: 768px) {
    left: 100px;
  }

  @media (min-width: 1024px) {
    left: 20px;
    display: block;
    width: 10vw;
  }

  @media (min-width: 1440px) {
    left: 100px;
    width: 20vw;
  }
`;

const PrimaryText = styled.p`
  color: var(--color-pink);
  font-weight: var(--font-weight-bold);
`;

const Slider = () => {
  return (
    <TrendingProducts>
      <TextSide>
        <PrimaryText>Best Furniture for your Castle ...</PrimaryText>
        <Heading>New Furniture Collection Trends in 2020</Heading>
        <p className="light-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
        <Button style={{ marginTop: "10px" }}>Shop Now</Button>

        <BulbImage src={bulb} alt="bulb" />
      </TextSide>
      <ImageSide>
        <img src={sofaPromotionalHeader} alt="Sofa Promotional Header" />
      </ImageSide>
    </TrendingProducts>
  );
};

export default Slider;
