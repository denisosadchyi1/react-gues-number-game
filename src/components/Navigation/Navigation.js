import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import styled from "styled-components";

const NavigationWrapper = styled.div`
  padding-top: 30px;
  width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const LinkItem = styled.div`
  width: 200px;
  color: black;
  .active {
    color: blue;
  }
`;

const CustomLinkItem = styled(NavLink)`
  color: #ffc134;
  font-weight: 700;
  text-decoration: none;
  font-size: 30px;
`;

const Navigation = () => {
  return (
    <NavigationWrapper>
      <LinkItem>
        <CustomLinkItem exact to="/">Home Page</CustomLinkItem>
      </LinkItem>
      <LinkItem>
        <CustomLinkItem to="/game">Game</CustomLinkItem>
      </LinkItem>
      <LinkItem>
        <CustomLinkItem to="/results">Your Results</CustomLinkItem>
      </LinkItem>
    </NavigationWrapper>
  );
};

export default Navigation;
