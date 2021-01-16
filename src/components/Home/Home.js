import React from 'react';
import {Switch, Route} from 'react-router-dom';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  width: 700px;
  margin: 200px auto;
  text-align: center;
  font-weight: 600;
  color: #fff;
  font-size: 25px;
`;

const Home = () => {
  return (
    <HomeWrapper>
      Rule of the game: You have 10 time to gues the number
    </HomeWrapper>
  );
}

export default Home;
