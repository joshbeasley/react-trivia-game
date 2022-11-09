// Github Link - https://github.com/joshbeasley/react-trivia-game
// Github Kanban Board - https://github.com/users/joshbeasley/projects/2/views/1

//-----------------------------------------------------------App.js-------------------------------------------------------------------//

import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Leaderboard from './components/Leaderboard/Leaderboard';
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home';
import Game from './components/Game/Game';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/leaderboard' element={<Leaderboard/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
