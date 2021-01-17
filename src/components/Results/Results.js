import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import AppContext from "../../context/context";

const ResultsWrapper = styled.ul`
  justify-content: space-between;
  display: flex;
  list-style: none;
  color: #ffc134;
  width: 700px;
  margin: 100px auto;
  font-weight: 700;
  li {
    margin: 15px 0;
  }
`;

const Results = () => {
  const { results, localResult, onClear } = useContext(AppContext);
  console.log(localResult)

  if (localResult !== null && localResult !== undefined && localResult.length > 0) {
    const allResult = localResult.map((result, index) => (
      <li key={index}>
        <h3>{result}</h3>
      </li>
    ));
    return (
      <ResultsWrapper>
        <div>{allResult}</div>
        <div>
          {
            localResult.length === 1 ? null : 
            <button 
            className="btn btn-warning"
            onClick={() => onClear()}>X</button>
          }
        </div>
      </ResultsWrapper>
    );
  } else if (localResult === null || localResult === undefined) {
    return (
      <ResultsWrapper>
        <h3>Make some attemps</h3>
      </ResultsWrapper>
    );
  }
};

export default Results;
