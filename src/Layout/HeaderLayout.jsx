import { styled } from "@mui/material/styles";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HeaderLayout = () => {
  return (
    <>
      <HeaderContainer>
        <Nav>
          <StyledNavLink to="material">Material</StyledNavLink>
          <StyledNavLink to="students">Students</StyledNavLink>
          <StyledNavLink to="ratings">Ratings</StyledNavLink>
        </Nav>
      </HeaderContainer>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default HeaderLayout;

const HeaderContainer = styled("header")`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 15px 30px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled("nav")`
  display: flex;
  gap: 20px; 
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease, border-bottom 0.3s ease;

  &:hover {
    color: #007bff;
  }

  &.active {
    color: #007bff;
    border-bottom: 3px solid #007bff; 
  }
`;
