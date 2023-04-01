import { useState, useEffect, useContext } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import dice1 from "../faces/dice1.png";
import dice2 from "../faces/dice2.png";
import dice3 from "../faces/dice3.png";
import dice4 from "../faces/dice4.png";
import dice5 from "../faces/dice5.png";
import dice6 from "../faces/dice6.png";
import Confetti from "react-confetti";
import { AppContext } from "./ContextAPI";

const MainPage = () => {

  const { player, playerList, updatePlayer } = useContext(AppContext);

  const [playing, setPlaying] = useState(playerList.length!=0?playerList[0]:player)
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [count, setCount] = useState(0);
  const [gameRound, setGameRound] = useState(1)

  // const { playerName } = useContext(nameContext)

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValues = dice.every((die) => firstValue === die.value);

    if (allHeld && allSameValues) {
      setTenzies(true);

    }
  }, [dice]);

  function randFace() {
    const diceFaces = [dice1, dice2, dice3, dice4, dice5, dice6];
    const randomIndex = Math.floor(Math.random() * diceFaces.length);
    return diceFaces[randomIndex];
  }

  function generateRandomNumbers() {
    return { value: randFace(), isHeld: false, id: nanoid() };
  }

  function allNewDice() {
    const randomNumbers = [];
    for (let i = 0; i < 10; i++) {
      randomNumbers.push(generateRandomNumbers());
    }

    return randomNumbers;
  }

  function rollDice() {
    if (!tenzies) {
      setDice((prevDice) =>
        prevDice.map((item) => {
          return item.isHeld ? item : generateRandomNumbers();
        })
      );
      setCount((currentCount) => {
        return currentCount + 1;
      });
    } else {      
      handleGameRounds()
      setTenzies(false);
      setDice(allNewDice());
      setCount(0);
    }
  }

  function holdDice(id) {
    setDice((prevDice) =>
      prevDice.map((item) => {
        return item.id === id ? { ...item, isHeld: !item.isHeld } : item;
      })
    );
  }

  const newNumbers = dice.map((item) => (
    <Die
      key={item.id}
      value={item.value}
      isHeld={item.isHeld}
      holdDice={() => holdDice(item.id)}
    />
  ));

  const handleGameRounds = () => {
    setPlaying({
      id: playing.id,
      playName: playing.playName,
      rollCount: count,
      gameRound: gameRound
    })
    updatePlayer({
      id: playing.id,
      playName: playing.playName,
      rollCount: count,
      gameRound: gameRound
    })
    if(playing.id === playerList[playerList.length-1].id){
      setGameRound(gameRound+1)      
      setPlaying(playerList[0])
    } else {
      setPlaying(playerList[playerList.indexOf(playing)+1])
    }
  }

  return (
    <>
      <main>
        {tenzies && <Confetti />}
        <h1 className="title">zona's Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <p>
          <b>{playing.playerName}</b> is playing
        </p>
        <div className="dice-container">{newNumbers}</div>
        <button className="dice-roll" onClick={rollDice}>
          {tenzies ? "New Game" : "Roll"}
        </button>
        <p>Number of Rolls: {count}</p>
      </main>
      <aside className="stats">
        <h3>Player Stats</h3>
        {playerList.map(({ playerName, rollCount }) => (
          <section className="player-details">
            <div className="name-side">
              <h4 className="details--heading">Name</h4>
              <p className="player-name">{playerName}</p>
            </div>

            <div className="roll-side">
              <h4 className="details--heading">Roll Count</h4>
              <p className="player-roll-count">{rollCount}</p>
            </div>
          </section>
        ))}
      </aside>
    </>
  );
};

export default MainPage;
