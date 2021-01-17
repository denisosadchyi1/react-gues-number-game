import React, { useContext } from 'react';
import {Switch, Route} from 'react-router-dom';
import styled from 'styled-components';
import AppContext from '../../context/context';
import GameStatus from '../GameStatus';

const GameWrapper = styled.div`
  width: 800px;
  margin: 100px auto;
  height: 300px;
  /* border: 2px solid #fff; */
`;

const EnterForm = styled.form`
  display: flex;
  padding-bottom: 20px;
`;

const EnterInput = styled.input`
  width: 600px;
  border: none;
  border-bottom: 2px solid #ffc134;
  background: transparent;
  outline: none;
  color: #ffc134;
  font-size: 20px;
  font-weight: 600;
`;

const GameStatusWrapper = styled.div`
  color: red;
`;

const EnterButton = styled.button`
  width: 150px;
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
`;

const Game = () => {
  const {setEnterNumber, onTry, gameStatus, enterNumber} = useContext(AppContext)
  return (
    <GameWrapper>
      <EnterForm>
        <EnterInput 
          value={enterNumber}
          type="text"
          onChange={(e) => setEnterNumber(e.target.value)} />
        <EnterButton 
          className="btn btn-warning"
          onClick={(e) => onTry(e)}>Try</EnterButton>
      </EnterForm>
      <GameStatusWrapper>
        <GameStatus />
      </GameStatusWrapper>
    </GameWrapper>
  );
}

export default Game;
