import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--color-pink);
  color: white;
  border: none;
  padding: var(--spacing-sm) var(--spacing-md);
  cursor: pointer;
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-bold);
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.9;
  }
  ${props => props.customStyle}
`;

const Button = ({ children, onClick, style }) => {
  return <StyledButton onClick={onClick} customStyle={style}>{children}</StyledButton>;
};

export default Button;
