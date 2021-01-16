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
  const [enterNumber, setEnterNumber] = useState(null)
  const [gameStatus, setGameStatus] = useState('')
  const [numberOfAttempts, setNumberOfAttempts] = useState(1)
  const [results, setResults] = useState([])
  const [localResult, setLocalResults] = useState([])
  const [push, setPush] = useState(false)

  useEffect(() => {
    setWin(false)
    setRandomNumber(Math.floor(Math.random() * (max - min)) + min)
  }, [regameStatus])

    useEffect(() => {
    localStorage.setItem('results', JSON.stringify(results))
  }, [push])

  useEffect(() => {
    const tmp = localStorage.getItem('results')
    console.log(JSON.parse(tmp))
    setLocalResults(JSON.parse(tmp))
  }, [])

  console.log(results, 'result')
  // console.log(localResult, 'local')


  const onTry = (e) => {
    setNumberOfAttempts(prev => prev + 1)
    if(numberOfAttempts >= 7) {
      setPush(!push)
      alert('You Lose')
      setGameStatus('You Lose :( ')
      setResults([
        ...results, 
        `You Lose :(`
      ])
    }
    e.preventDefault()
    if(enterNumber == randomNumber) {
      setWin(true)
      setPush(!push)
      setRegameStatus(!regameStatus)
      setResults([
        ...results, 
        `You made ${numberOfAttempts} attemps, random number is ${randomNumber}`
      ])
      alert('you win')
    } else if(enterNumber < randomNumber) {
      setGameStatus('Not enough, try again!')
    } else if(enterNumber > randomNumber) {
      setGameStatus('too much, try again')
    }
  }

  console.log(randomNumber)

  return (
    <AppContext.Provider value={{
      randomNumber, setEnterNumber, onTry, 
      gameStatus, results, localResult
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
