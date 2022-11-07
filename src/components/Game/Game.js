import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Question from '../Question/Question';
import './Game.css'
import Dashboard from '../Dashboard/Dashboard'

const Game = () => {
  const [questions, setQuestions] = React.useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0)
  // const [currentQuestion, setCurrentQuestion] = React.useState([])
  // const [score, setScore] = React.useState(0)

  const location = useLocation();
  const { numQuestions, category, difficulty, type } = location.state;
  // props:
  // - all of the users selections

  // state
  // - array of questions
  // - current question
  // - num questions correct
  useEffect(() => {
    let url = `https://opentdb.com/api.php?amount=${numQuestions}`;
    if (category !== 'Any') {
      url += `&category=${category}`;
    }
    if (difficulty !== 'Any') {
      url += `&difficulty=${difficulty}`;
    }
    if (type !== 'Any') {
      url += `&type=${type}`;
    }
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setQuestions(data.results)
        console.log(data)
      })
      .catch(err => alert("ERROR:", err))
  }, [])

  const handleClick = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }
 
  return (
    currentQuestionIndex >= numQuestions ? 
    <Dashboard /> :
    <>
      <div>
        
        {questions.map((question, idx) => {
          if (idx === currentQuestionIndex) {
            return <Question question={question} />;
          }
          else {
            return <></>
          }
        })}
      </div>
      <button onClick={handleClick}>Next Question</button>
    </>

  )
}

export default Game
