import { styled } from "@mui/material/styles";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Baselayout = () => {
  return (
    <Container>
      <Nav>
        <Logo>LOGO</Logo>
        <StyledNavLink to="courses">Courses</StyledNavLink>
        <StyledNavLink to="anouncements">Anouncements</StyledNavLink>
        <StyledNavLink to="notification">Notification</StyledNavLink>
        <StyledNavLink to="schedule">Schedule</StyledNavLink>
      </Nav>
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Baselayout;

const Container = styled("div")`
  display: flex;
  height: 100vh;
`;

const Nav = styled("nav")`
  display: flex;
  flex-direction: column;
  width: 220px;
  background-color: #343a40;
  padding: 20px;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled("h1")`
  font-size: 1.4rem;
  font-weight: bold;
  color: #fff;
  margin: 0 0 20px 0;
  text-align: center;
  font-family: monospace;
`;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 12px;
  padding: 12px 16px;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #495057;
    color: #fff;
  }

  &.active {
    background-color: #007bff;
    color: #fff;
  }
`;

const Content = styled("div")`
  flex-grow: 1;
  padding: 20px;
  background-color: #f8f9fa;
  overflow-y: auto;
`;
