import { Routes, Route, Link } from "react-router-dom";

import './App.css'
import { PlayerProvider } from '../constext/PlayerContext'
import PlayerForm from './Player/PlayerForm'
import { PlayerList } from './Player/PlayerList'
import { PlayerSingle } from './Player/PlayerSingle'


function App(){
  


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
    <PlayerProvider>
      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <div className="row">
              <div className="col s4">
                <PlayerList
                  
                />
              </div>

              <div className="col s8">
                <PlayerSingle />
              </div>
            </div>
          }
        />

        {/* ADD PLAYER PAGE */}
        <Route
          path="/add-player"
          element={<PlayerForm />}
        />
        <Route path="/edit/:id" element={<PlayerForm />} />
      </Routes>
      </PlayerProvider>
    </div>
  )
}



export default App;
