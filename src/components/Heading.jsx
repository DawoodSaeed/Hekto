import styled from "styled-components";
import React from "react";

const Title = styled.h2`
  font-size: clamp(1.5rem, 2vw, 2.5rem);
  font-weight: bold;
  color: #450077;
  margin-bottom: 20px;

  ${(props) => props.customStyle}
`;

const Heading = ({ children, style }) => {
  return <Title customStyle={style}>{children}</Title>;
};

export default Heading;
