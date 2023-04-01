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
        let oldPlayer = playerList.find(obj => {
            return obj.id === playerData.id
        })
        let allPlayers = playerList
        allPlayers[allPlayers.indexOf(oldPlayer)] = playerData
        setPlayerList(allPlayers)
    }

    return (
        <AppContext.Provider
        value={{
            player,
            setPlayer,
            playerList,
            setPlayerList,
            updatePlayer
        }}
        >
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider;
