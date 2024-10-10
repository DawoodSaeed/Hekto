import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  background-color: #f6f5ff;
  min-height: 20vh;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 30px;
  }

  @media (min-width: 1200px) {
    padding: 0px 370px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: var(--font-weight-bold);
  color: #000;
  font-family: var(--font-family-secondary);
  text-align: center;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    text-align: left;
  }

  @media (min-width: 1200px) {
    font-size: 3rem;
  }
`;

const Breadcrumb = styled.nav`
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: #000;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const BreadcrumbList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const BreadcrumbListItem = styled.li`
  list-style: none;
  display: inline-flex;
  align-items: center;

  &:not(:last-child)::after {
    content: "/";
    margin: 0 8px;
  }

  &[aria-current="page"] > a {
    color: var(--color-pink);
    font-weight: var(--font-weight-bold);
    transition: all 0.3s ease;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const BreadcrumbLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const renderBreadcrumbItems = (path) => {
  const pathSegments = path.split("/").filter((segment) => segment !== "");
  return pathSegments.map((segment, index) => {
    const url = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const title = segment.charAt(0).toUpperCase() + segment.slice(1);
    return (
      <BreadcrumbListItem key={url}>
        <BreadcrumbLink to={url}>{title}</BreadcrumbLink>
      </BreadcrumbListItem>
    );
  });
};

const Layout = () => {
  const location = useLocation();

  const pathTitles = {
    "/about": "About Us",
    "/contact": "Contact Us",
    "/shop": "Shop",
    "/product": "Product Details",
    "/cart": "Shopping Cart",
    "/checkout": "Checkout",
    "/blog": "Blog",
  };

  const pageTitle = pathTitles[location.pathname] || "Home";
  return (
    <>
      <LayoutWrapper>
        <ContentWrapper>
          <Heading>{pageTitle}</Heading>
          <Breadcrumb aria-label="breadcrumb">
            <BreadcrumbList>
              <BreadcrumbListItem>
                <BreadcrumbLink to="/">Home</BreadcrumbLink>
              </BreadcrumbListItem>
              {renderBreadcrumbItems(location.pathname)}
            </BreadcrumbList>
          </Breadcrumb>
        </ContentWrapper>
      </LayoutWrapper>
      <Outlet />
    </>
  );
};

export default Layout;
