import { useState } from "react"
import  AppContextProvider  from './components/ContextAPI';
import Start from './components/Start';
// import { nameContext } from './components/Start';
import './App.css';
import MainPage from './components/MainPage';


function App() {

  const [game, setGame] = useState({pageview: 'index'})

  function displayGame() {
    setGame(prevState => {
      return {
        ...prevState,
        pageview: 'dies'
      }
    })
  }
  
  return (
    <div className="app">
      <AppContextProvider>
      {game.pageview === 'index' && <Start displayGame={displayGame}/>}
      {game.pageview === 'dies' && <MainPage /> }
      </AppContextProvider>
    </div>
    
  );
}

export default App;
