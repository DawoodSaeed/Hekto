import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--color-pink);
  color: white;
  border: none;
  padding: var(--spacing-md) var(--spacing-xl);
  cursor: pointer;
  font-size: var(--font-size-md);
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.9;
    box-shadow: 0 5px 15px rgba(255, 105, 180, 0.4);
  }
  ${(props) => props.customStyle}
`;

const Button = ({ children, onClick, style }) => {
  return (
    <StyledButton onClick={onClick} customStyle={style}>
      {children}
    </StyledButton>
  );
};

export default Button;
