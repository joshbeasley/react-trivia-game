//--------------Dashboard Imports-------------------//

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

//-------------Dashboard-----------------------//

const Dashboard = (
  { questionsAnswered }
) => {

  const insults = [
    "[This insult was redacted by George]",
    "You're so dumb you thought a quarterback was a refund",
    "Look on the bright side. You could always join the military",
    "Not even the Marines would take you...",
    "You haven't been yourself lately. We've all noticed the improvement.",
    "You are impossible to underestimate.",
    "You're such a waste of time, I should've made you pay for this.",
    "If you were be a spice, you'd be flour.",
    "Whoever told you to be yourself couldn't have given you worse advice.",
    "You're so stupid, you failed a blood test.",
    "You got a 7 on the ACT didnt you?",
    "I'd challenge you to a battle of wits, but I see you're unarmed.",
    "You are NOT smarter than a 5th grader.",
    "Your mother was a hamster and your father smelled of elderberries.",
    "I'm guessing you weren't burdened with an overabundance of schooling.",
    "It's OK your chances of getting into a Community College are like... 73%!",
    "Tsk....dingus",
    "Bad Show! Very Bad Show!",
    "Even an empty petri dish is more cultured than you.",
    "You know, I'm pretty sure Burger King is hiring...",
    "We can't all be docters...",
    "Congrats!!! you have the same IQ as a squid.",
    "Everyone in this room is now dumber for having listened to you. I award you no points, and may God have mercy on your soul",
    "Why don't you check up on eBay and see if they have some 1st grade textbooks for sale.",
    "Next time you go out, take a sentient being with you.",
    "Your brain is as smooth as a bowling ball.",
    "You are the human equivalent of a participation award.",
    "If your brain was donated to science, science would return it.",
    "You, my friend, are a piece of foam.",
    "How is Internet Explorer working for you?"
  ];

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [avg, setAvg] = useState(0);
  const [insult, setInsult] = useState('');

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < questionsAnswered.length; i++) {
      total += questionsAnswered[i];
    }
    let avg = Math.round(total / questionsAnswered.length * 100);
    if (avg >= 70)
      setInsult("Congratulations!");
    else {
      if (avg < 70)
        setInsult(insults[getRandomInt(0, 29)])
    }
    setAvg(avg);
  }, [])

  //----------------Name/Score Leaderboard input--------------------//

  const handleChange = (event) => {
    setName(event.target.value);
  }
  const handleClick = (event) => {
    let item = { "name": name, "avg": avg }
    localStorage.setItem(JSON.stringify(name), JSON.stringify(item));
    navigate('/Leaderboard',)
  }
  return (
    <>
      <div className="dashboard">
        {/* Dashboard Average */}
        <div className="text">{insult}</div>
        <div className="text2">{`You Scored`}</div>
        {/* Pie Chart */}
        <svg viewBox="0 0 36 36" class="circular-chart">
          <path className="circle"
            strokeDasharray={`${avg}, 100`}
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="6.25" y="20.35" className="percentage" fontSize=".65rem" fill="rgb(0, 200, 255)">{avg}%</text>
        </svg>
        {/* Dashboard Home Button */}
        <div className="enter-name">
          <div class="form-group">
            <input type="text" class="form-control" id="name-input" placeholder="Enter name" onChange={handleChange} value={name} />
          </div>
          <button type="button" className="btn btn-dark" onClick={handleClick}>Submit Name</button>
        </div>
      </div>
    </>
  )
}

export default Dashboard
