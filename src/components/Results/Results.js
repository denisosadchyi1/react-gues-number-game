import React, { useContext } from 'react';
import {Switch, Route} from 'react-router-dom';
import styled from 'styled-components';
import AppContext from '../../context/context';

const ResultsWrapper = styled.ul`
  list-style: none;
  color: #ffc134;
  width: 700px;
  margin: 100px auto;
  font-weight: 700;
  li{
    margin: 15px 0;
  }
`;

const Results = () => {
  const {results, localResult} = useContext(AppContext)
  if(results.length > 0) {
    const allResult = JSON.parse(localStorage.getItem('results')).map((result, index) => (
      <li key={index}>
        <h3>{result}</h3>
      </li>
    ))
    return (
      <ResultsWrapper>
        {allResult}
      </ResultsWrapper>
    )
  } else {
    return (
      <ResultsWrapper>
        <h3>Make some attemps</h3>
     </ResultsWrapper>
    )
  }
}

export default Results;
