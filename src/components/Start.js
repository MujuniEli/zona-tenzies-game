import React, { useState } from "react"

export default function Start({displayGame}) {

    const [playerList, setPlayerList] = useState([])
    const [player, setPlayer] = useState("")
  
  
    function handleChange(event) {
      setPlayer(event.target.value)
    }

    return (
        <div>
            <h3>Add Your names below for a Unique experience</h3>
            <div className="player-name">
                <input 
                type="text"
                placeholder="Add player name"
                onChange={handleChange}
                />
                <button> + </button>
            </div>
            
            <button type="button" className="start-btn" onClick={displayGame}>Start Game</button>
        </div>
    )
}