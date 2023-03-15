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
                className="form-input"
                />
                <button className="form-btn" onClick={addPlayer}> Add Player </button>
            </div>
            <div className="player-list">
                {playerList.map((player) => {
                    return (
                        <div className="players">
                            <p className="player-name">
                            {player.charAt(0).toUpperCase() + player.slice(1)}
                        </p>
                        <button className="rm-btn"> - </button>
                        </div>
                        
                    )
                })}
            </div>
            
            <button type="button" className="start-btn" onClick={displayGame}>Start Game</button>
        </div>
    )
}