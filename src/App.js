import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Leaderboard from './components/Leaderboard/Leaderboard';
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home';
import Game from './components/Game/Game';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/leaderboard' element={<Leaderboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
