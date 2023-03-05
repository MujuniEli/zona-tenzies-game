

export default function Start({displayGame}) {
    return (
        <div>
            <h3>Add Your names below for a Unique experience</h3>
            <div className="player-name">
                <input 
                type="text"
                placeholder="Add player name"

                />
                <button> + </button>
            </div>
            
            <button type="button" className="start-btn" onClick={displayGame}>Start Game</button>
        </div>
    )
}