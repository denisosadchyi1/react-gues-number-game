import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Game from "./components/Game";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Results from "./components/Results";
import AppContext from "./context/context";

const AppWrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

const App = () => {
  const min = 0;
  const max = 100;
  const [win, setWin] = useState(false)
  const [regameStatus, setRegameStatus] = useState(false)
  const [randomNumber, setRandomNumber] = useState(null)
  const [enterNumber, setEnterNumber] = useState('')
  const [gameStatus, setGameStatus] = useState([])
  const [numberOfAttempts, setNumberOfAttempts] = useState(1)
  const [localResult, setLocalResults] = useState(JSON.parse(localStorage.getItem('localResult')))

  useEffect(() => {
    setWin(false)
    setRandomNumber(Math.floor(Math.random() * (max - min)) + min)
  }, [regameStatus])

    useEffect(() => {
    localStorage.setItem('localResult', JSON.stringify(localResult))
    console.log('Effect local after update localResult')
  }, [localResult])

  console.log(localResult, 'localResult')

  const onTry = (e) => {
    setNumberOfAttempts(prev => prev + 1)
    if(numberOfAttempts > 7) {
      alert('You Lose')
      setGameStatus('You Lose :( ')
      if(localResult === null ) {
        setLocalResults([`You Lose :(`])
        setNumberOfAttempts(1)
      } else {
        setLocalResults([
          ...localResult, 
          `You Lose :(`
        ])
      }
    }
    e.preventDefault()
    if(enterNumber == randomNumber) {
      setNumberOfAttempts(1)
      setWin(true)
      setRegameStatus(!regameStatus)
      alert('You win! :)')
      if(localResult === null ) {
        setLocalResults([ `You made ${numberOfAttempts} attemps, random number is ${randomNumber}`])
      } else {
        setLocalResults([
          ...localResult, 
          `You made ${numberOfAttempts} attemps, random number is ${randomNumber}`
        ])
      }
    } else if(enterNumber < randomNumber) {
      gameStatus ? setGameStatus([...gameStatus, `${enterNumber} Not enough, try again!`]) : setGameStatus([`${enterNumber} Not enough, try again!`])
    } else if(enterNumber > randomNumber) {
      gameStatus ? setGameStatus([...gameStatus, `${enterNumber} Too much, try again!`]) : setGameStatus([`${enterNumber} Too much, try again!`])
    }
    setEnterNumber('')
  }

  const onClear = () => {
    setLocalResults([''])
  }

  console.log(gameStatus, 'gameStatus')
  console.log(randomNumber)

  return (
    <AppContext.Provider value={{
      randomNumber, setEnterNumber, onTry, 
      gameStatus, localResult, setLocalResults,
      enterNumber, onClear
    }}>
      <AppWrapper>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/game" component={Game} />
          <Route path="/results" component={Results} />
        </Switch>
      </AppWrapper>
    </AppContext.Provider>
  );
};

export default App;
