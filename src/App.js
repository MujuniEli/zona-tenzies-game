
import { useState,useEffect } from 'react';
import Die from "./components/Die"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import dice1 from './faces/dice1.png';
import dice2 from './faces/dice2.png';
import dice3 from './faces/dice3.png';
import dice4 from './faces/dice4.png';
import dice5 from './faces/dice5.png';
import dice6 from './faces/dice6.png';
import './App.css';


function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  const [count, setCount] = useState(0)

  
  
  useEffect(()=> {
    const allHeld = dice.every(die =>  die.isHeld)
    const firstValue = dice[0].value
    const allSameValues = dice.every(die => firstValue === die.value)

    if(allHeld && allSameValues){
      setTenzies(true)
      
    }
  }, [dice])

  function randFace() {
    const diceFaces = [dice1, dice2, dice3, dice4, dice5, dice6]
    const randomIndex = Math.floor(Math.random() * diceFaces.length)
    const finalFace = diceFaces.map(face => face[randomIndex])
    return finalFace
  }

  
  function generateRandomNumbers() {
    return {value: randFace(), isHeld: false, id: nanoid()}
  }


  function allNewDice() {
    const randomNumbers = []
    for(let i = 0; i < 10; i++){
      randomNumbers.push(generateRandomNumbers())
    }

    return randomNumbers
  }

  function rollDice(){
   
      if(!tenzies){
        setDice(prevDice => prevDice.map(item => {
          return item.isHeld ? item : generateRandomNumbers()
        }))
      } else {

              setTenzies(false)
              setDice(allNewDice())
      }
      setCount(count => count + 1) 
  }


  function holdDice(id) {
    setDice(prevDice => prevDice.map(item => {
      return item.id === id ? {...item, isHeld: !item.isHeld} : item
    }))
  }

  const newNumbers = dice.map(item => 
  <Die key={item.id} value={item.value} isHeld={item.isHeld} holdDice={()=>holdDice(item.id)}/>
      )

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className='title'>zona's Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {newNumbers}
      </div>
      <button className='dice-roll' onClick={rollDice}>{tenzies ? "New Game" : "Roll" }</button>
      <p>Number of Rolls: {count}</p>
    </main>
  );
}

export default App;
