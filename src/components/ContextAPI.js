import React, { createContext, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [player, setPlayer] = useState({
        playerName: "Zack",
        rollCount: 0
    })
    const [playerList, setPlayerList] = useState([
        {
            playerName: "Jerry",
            rollCount: 9
        }
    ])

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
