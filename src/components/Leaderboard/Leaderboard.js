import React, { useState, useEffect } from 'react'
import './Leaderboard.css'

const Leaderboard = () => {
  const [result, setResult] = useState([])

  useEffect(() => {
    let array = []
    let keys = Object.keys(localStorage)
    for (let i = 0; i < keys.length; i++) {
      array.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    array.sort((a, b) => (a.avg > b.avg) ? -1 : 1)
    setResult(array)
  }, []);

  return (
    <div className="leaderboard-container">
      <div className="ltext">Leaderboard</div>
      <ol className="ltext2">{result.map((r) => <li>{r.name}: {r.avg}%</li>)}</ol>
    </div>
  )
}

export default Leaderboard
