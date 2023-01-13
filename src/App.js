
import { useState } from 'react';
import Die from "./components/Die"
import './App.css';


function App() {
  const [dice, setDice] = useState(allNewDice())
  
  function allNewDice() {
    const randomNumbers = []
    for(let i = 0; i < 10; i++){
      randomNumbers.push(Math.ceil(Math.random() * 6))
    }

    return randomNumbers
  }

  const newNumbers = dice.map(item => <Die value={item}/>)
  
  return (
    <main>
      <div className="dice-container">
        {newNumbers}
      </div>
      
    </main>
  );
}

export default App;
