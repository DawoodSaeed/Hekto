import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  background-color: #fff;
  width: 100%;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--color-border);

  @media (max-width: 768px) {
    padding: var(--spacing-sm);
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    padding: var(--spacing-md) var(--spacing-lg);
  }

  @media (min-width: 1201px) {
    padding: 20px 371px;
  }
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family-secondary);
  margin-right: var(--spacing-md);

  @media (min-width: 769px) {
    margin-right: var(--spacing-2xl);
  }
`;

const NavItems = styled.ul`
  display: none;
  list-style-type: none;
  gap: var(--spacing-md);

  @media (min-width: 769px) {
    display: flex;
  }
`;

const NavItem = styled(Link)`
  cursor: pointer;
  color: #000;
  text-decoration: none;
  &:hover {
    color: var(--color-purple);
  }
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
`;

const SearchBar = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--color-border);
  overflow: hidden;
  width: 300px;

  @media (min-width: 769px) {
    display: flex;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    width: 250px;
  }
`;

const SearchInput = styled.input`
  border: none;
  padding: var(--spacing-sm) var(--spacing-md);
  outline: none;
  width: 100%;
`;

const SearchButton = styled.button`
  background-color: var(--color-pink);
  color: white;
  border: none;
  padding: var(--spacing-sm) var(--spacing-md);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  outline: 1px solid var(--color-pink);
`;

const HamburgerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (min-width: 769px) {
    display: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: var(--color-navy-blue);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--color-background);
  height: 100vh;
  width: 100%;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  z-index: 9;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledNavbar>
      <NavbarLeft>
        <Logo>Hekto</Logo>
        <NavItems>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/shop">Shop</NavItem>
          <NavItem to="/blog">Blog</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavItem to="/about">About</NavItem>
        </NavItems>
      </NavbarLeft>
      <NavbarRight>
        <SearchBar>
          <SearchInput type="text" placeholder="Search..." />
          <SearchButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </SearchButton>
        </SearchBar>
        <HamburgerIcon onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </HamburgerIcon>
      </NavbarRight>
      <MobileMenu open={open}>
        <NavItem>Home</NavItem>
        <NavItem>Shop</NavItem>
        <NavItem>Blog</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem>About</NavItem>
      </MobileMenu>
    </StyledNavbar>
  );
};

export default Navbar;
