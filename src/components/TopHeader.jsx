import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  background-color: #7e33e0;
  width: 100%;
  color: #fff;
  padding: 10px 20px;

  @media (min-width: 768px) {
    padding: 10px 40px;
  }

  @media (min-width: 1200px) {
    padding: 10px 71px;
  }

  @media (min-width: 1440px) {
    padding: 10px 400px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 576px) {
    flex-direction: row;
    gap: 20px;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;

  @media (min-width: 576px) {
    justify-content: flex-end;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Select = styled.select`
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const LoginLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const CartIcon = styled.div`
  cursor: pointer;
`;

const TopHeader = () => {
  return (
    <StyledHeader>
      <HeaderContent>
        <LeftSide>
          <ContactInfo>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6673 2.66663H3.33398C2.80355 2.66663 2.29484 2.87734 1.91977 3.25241C1.5447 3.62749 1.33398 4.13619 1.33398 4.66663V11.3333C1.33398 11.8637 1.5447 12.3724 1.91977 12.7475C2.29484 13.1226 2.80355 13.3333 3.33398 13.3333H12.6673C13.1978 13.3333 13.7065 13.1226 14.0815 12.7475C14.4566 12.3724 14.6673 11.8637 14.6673 11.3333V4.66663C14.6673 4.13619 14.4566 3.62749 14.0815 3.25241C13.7065 2.87734 13.1978 2.66663 12.6673 2.66663ZM3.33398 3.99996H12.6673C12.8441 3.99996 13.0137 4.0702 13.1387 4.19522C13.2637 4.32025 13.334 4.48981 13.334 4.66663L8.00065 7.91996L2.66732 4.66663C2.66732 4.48981 2.73756 4.32025 2.86258 4.19522C2.9876 4.0702 3.15717 3.99996 3.33398 3.99996ZM13.334 11.3333C13.334 11.5101 13.2637 11.6797 13.1387 11.8047C13.0137 11.9297 12.8441 12 12.6673 12H3.33398C3.15717 12 2.9876 11.9297 2.86258 11.8047C2.73756 11.6797 2.66732 11.5101 2.66732 11.3333V6.18663L7.65398 9.23329C7.75533 9.2918 7.87029 9.32261 7.98732 9.32261C8.10434 9.32261 8.21931 9.2918 8.32065 9.23329L13.334 6.18663V11.3333Z"
                fill="white"
              />
            </svg>
            <span>mhhasanul@gmail.com</span>
          </ContactInfo>
          <ContactInfo>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0448 14.666H11.0635C11.4155 14.666 11.7481 14.5274 12.0001 14.2754L13.8081 12.4674C13.8701 12.4055 13.9193 12.332 13.9528 12.2512C13.9863 12.1703 14.0036 12.0836 14.0036 11.996C14.0036 11.9085 13.9863 11.8218 13.9528 11.7409C13.9193 11.66 13.8701 11.5866 13.8081 11.5247L11.1415 8.85804C11.0796 8.79608 11.0061 8.74692 10.9253 8.71338C10.8444 8.67984 10.7577 8.66257 10.6701 8.66257C10.5826 8.66257 10.4959 8.67984 10.415 8.71338C10.3341 8.74692 10.2607 8.79608 10.1988 8.85804L9.13613 9.92071C8.64346 9.77404 7.72413 9.44071 7.14146 8.85804C6.5588 8.27537 6.22546 7.35604 6.0788 6.86337L7.14146 5.80071C7.20343 5.73885 7.25258 5.66538 7.28612 5.5845C7.31967 5.50363 7.33693 5.41693 7.33693 5.32937C7.33693 5.24182 7.31967 5.15512 7.28612 5.07425C7.25258 4.99337 7.20343 4.9199 7.14146 4.85804L4.4748 2.19137C4.34734 2.07108 4.17872 2.00406 4.00346 2.00406C3.8282 2.00406 3.65958 2.07108 3.53213 2.19137L1.7248 3.99937C1.47146 4.25271 1.3288 4.60071 1.33413 4.95604C1.34946 5.90537 1.6008 9.20271 4.19946 11.8014C6.79813 14.4 10.0955 14.6507 11.0448 14.666ZM4.00413 3.60537L5.72813 5.32937L4.86613 6.19137C4.78768 6.2696 4.73006 6.36621 4.6985 6.47241C4.66695 6.5786 4.66247 6.691 4.68546 6.79937C4.70146 6.87604 5.0928 8.69404 6.19946 9.80071C7.30613 10.9074 9.12413 11.2987 9.2008 11.3147C9.30916 11.3378 9.4216 11.3334 9.52781 11.3018C9.63403 11.2703 9.73064 11.2126 9.8088 11.134L10.6708 10.272L12.3948 11.996L11.0575 13.3327C10.2255 13.3187 7.3788 13.0954 5.14213 10.858C2.89813 8.61404 2.6808 5.75737 2.66746 4.94204L4.00413 3.60537ZM13.3335 7.33271H14.6668C14.6668 3.91271 12.0848 1.33337 8.66013 1.33337V2.66671C11.3681 2.66671 13.3335 4.62871 13.3335 7.33271Z"
                fill="white"
              />
              <path
                d="M8.66602 5.33333C10.068 5.33333 10.666 5.93133 10.666 7.33333H11.9993C11.9993 5.18333 10.816 4 8.66602 4V5.33333Z"
                fill="white"
              />
            </svg>
            <span>(12345)67890</span>
          </ContactInfo>
        </LeftSide>
        <RightSide>
          <Select defaultValue="EN">
            <option value="EN">English</option>
            <option value="ES">Español</option>
            <option value="FR">Français</option>
          </Select>
          <Select defaultValue="USD">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </Select>
          <LoginLink to="/login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            </svg>
            Login
          </LoginLink>
          <CartIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bag"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
            </svg>
          </CartIcon>
        </RightSide>
      </HeaderContent>
    </StyledHeader>
  );
};

export default TopHeader;
