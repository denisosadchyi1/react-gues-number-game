import React, {useContext} from 'react';
import styled from 'styled-components';
import AppContext from '../../context/context';

const ListStatus = styled.ul`
  list-style: none;
  li{
    margin: 5px auto;
    font-size: 25px;
    letter-spacing: 0.1em;
  }
`;

const GameStatus = () => {

  const {gameStatus} = useContext(AppContext)

  const elem = gameStatus.map(status => {
    return (
      <li>{status}</li>
    )
  })

  return (
    <ListStatus>
      {elem}
    </ListStatus>
  )
} 

export default GameStatus;