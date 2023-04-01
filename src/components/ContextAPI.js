import React, { createContext, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [player, setPlayer] = useState({
        id: "",
        playerName: "",
        rollCount: 0,
        gameRounds: 0
    })
    const [playerList, setPlayerList] = useState([])

    const updatePlayer = (playerData) => {
        
    }

    return (
        <AppContext.Provider
        value={{
            player,
            setPlayer,
            playerList,
            setPlayerList
        }}
        >
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider;
