import React from 'react';
import {Switch, Route} from 'react-router-dom';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  width: 700px;
  margin: 200px auto;
  text-align: center;
  font-weight: 600;
  color: lightgreen;
  font-size: 25px;
  div{
    font-size: 35px;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <div>Rules of the game:</div>
      <p>you have 7 attempts to guess the given random number, good luck</p>
    </HomeWrapper>
  );
}

export default Home;
