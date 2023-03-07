import React, { useState } from "react"

export default function Start({displayGame}) {

    const [playerList, setPlayerList] = useState([])
    const [playerName, setPlayerName] = useState("")
  
  
    function handleChange(event) {
      setPlayerName(event.target.value)
    }

    function addPlayer() { 
        setPlayerList([...playerList, playerName])
    }

    return (
        <div className="start-page">
            <h3>Add Your names below to play</h3>
            <div className="player-name">
                <input 
                type="text"
                placeholder="Add player name"
                onChange={handleChange}
                />
                <button onClick={addPlayer}> Add Player </button>
            </div>
            <div className="player-list">
                {playerList.map((player) => {
                    return (
                        <div className="players">
                            <h3>
                            {player}
                        </h3>
                        <button> remove player </button>
                        </div>
                        
                    )
                })}
            </div>
            
            <button type="button" className="start-btn" onClick={displayGame}>Start Game</button>
        </div>
    )
}