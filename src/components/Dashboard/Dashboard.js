//--------------Dashboard Imports-------------------//

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

//-------------Dashboard-----------------------//

const Dashboard = (
  { questionsAnswered }
) => {

  const insults = [
    "I am sick when I do look on thee.",
    "You're so dumb you thought a quarterback was a refund",
    "You look like a before picture.",
    "If you were born a baby in ancient Sparta, you would have been thrown off a cliff.",
    "You haven't been yourself lately. We've all noticed the improvement.",
    "You are impossible to underestimate.",
    "You're such a waste of time, can you at least give me my 60 seconds back?",
    "If you were be a spice, you'd be flour.",
    "Whoever told you to be yourself couldn't have given you worse advice.",
    "You're so stupid, you failed a blood test.",
    "Your family is from the shallow end of the gene pool, isn't it?",
    "I'd challenge you to a battle of wits, but I see you're unarmed.",
    "Your gene pool could use a bit more chlorine.",
    "Your mother was a hamster and your father smelled of elderberries.",
    "I'm guessing you weren't burdened with an overabundance of schooling.",
    "Thou leathern-jerkin, crystal-button, knot-pated, agatering, puke-stocking, caddis-garter, smooth-tongue, Spanish pouch!",
    "Tsk....dingus",
    "I've seen people like you before, but I had to pay admission.",
    "Even an empty petri dish is more cultured than you.",
    "I would slap you but that would be animal abuse.",
    "Were you raised to be this stupid or is it in the DNA?",
    "If I wanted to kill myself, I would climb to the number of your chromosomes and then jump to your IQ.",
    "Everyone in this room is now dumber for having listened to you. I award you no points, and may God have mercy on your soul",
    "Why don't you check up on eBay and see if they have some 1st grade textbooks for sale.",
    "Next time you go out, take a sentient being with you.",
    "I wondered why all the birds suddenly stopped singing. What brings you here?",
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
    navigate('/',)
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
