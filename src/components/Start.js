import React, { useState, createContext } from "react"
import { nanoid } from "nanoid"

export const nameContext = createContext()

export default function Start({displayGame}) {

    const [playerList, setPlayerList] = useState([])
    const [player, setPlayer] = useState("")
  
  
    function handleChange(e) {
        setPlayer({
            id: '',
            playerName: e.target.value
      })
    }

    const addPlayer = (e) => {
        const new_player = {
            id: nanoid(),
            playerName: player.playerName
        }
        setPlayerList([...playerList, new_player])
    }

    function deletePlayer(event) {
        setPlayerList(playerList.filter((item) => item.id !== event.target.value))
    }
    
    
    return (
        <div className="start-page">
            <p className="instructions">Add Your names below to play as a specific player or click <b>Start Game</b> to play anonymously!</p>
            <nameContext.Provider value={{}}>
            <div className="player">
                <input 
                type="text"
                placeholder="Add player name"
                value={player.playerName}
                onChange={handleChange}
                className="form-input"
                />
                <button
                    className="form-btn"
                    onClick={addPlayer}
                >
                    Add Player
                </button>
            </div>
            <div className="player-list">
                {playerList.map((item) => {
                    return (
                        <div key={item.id} className="players">
                            <p className="player-name">
                                {item.playerName}
                            </p>
                            <button value={item.id} onClick={deletePlayer} className="rm-btn"> x </button>
                        </div>
                        
                    )
                })}
            </div>
            </nameContext.Provider>
            <button type="button" className="start-btn" onClick={displayGame}>Start Game</button>
        </div>
    )
}