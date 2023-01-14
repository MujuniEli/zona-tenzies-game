
import { useState } from 'react';
import Die from "./components/Die"
import { nanoid } from 'nanoid'
import './App.css';


function App() {
  const [dice, setDice] = useState(allNewDice())
  
  function allNewDice() {
    const randomNumbers = []
    for(let i = 0; i < 10; i++){
      randomNumbers.push({value: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid()})
    }

    return randomNumbers
  }

  function rollDice(){
      setDice(allNewDice())
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
      <h1 className='title'>zona's Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {newNumbers}
      </div>
      <button className='dice-roll' onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
