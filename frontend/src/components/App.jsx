import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'

import './App.css'
import PlayerForm from './Player/PlayerForm'
import { PlayerList } from './Player/PlayerList'
import { PlayerSingle } from './Player/PlayerSingle'


function App(){
  const [playerList, setPlayerList] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState({});

  

  const fetchPlayers = async () => {
    const res = await axios.get("http://localhost:4000/players");
    setPlayerList(res.data);
  };

  useEffect(() => {
     fetchPlayers();

  }, []);


  return(
    <div className="container-fluid">
      {/* Header */}
      <div className="row">
        <div className="col s12">
          <h4>Player Management</h4>

          {/* Navigation */}
          <Link to="/add-player" className="btn">
            Add Player
          </Link>
        </div>
      </div>

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <div className="row">
              <div className="col s4">
                <PlayerList
                  players={playerList}
                  updateCurrentPlayer={setCurrentPlayer}
                />
              </div>

              <div className="col s8">
                <PlayerSingle player={currentPlayer} />
              </div>
            </div>
          }
        />

        {/* ADD PLAYER PAGE */}
        <Route
          path="/add-player"
          element={<PlayerForm onSuccess={fetchPlayers} />}
        />
      </Routes>
    </div>
  )
}



export default App;
