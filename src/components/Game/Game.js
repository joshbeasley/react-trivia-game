import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Question from '../Question/Question';
import './Game.css'
import Dashboard from '../Dashboard/Dashboard'

const Game = () => {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [questionsAnswered, setQuestionsAnswered] = useState([]);

  const location = useLocation();
  const { numQuestions, category, difficulty, type } = location.state;

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
  }, [numQuestions, category, difficulty, type])

  const handleClick = (event, correct) => {
    event.preventDefault();
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setQuestionsAnswered([...questionsAnswered, correct])
  }
 
  return (
    currentQuestionIndex >= numQuestions ? 
    <Dashboard questionsAnswered={questionsAnswered}/> :
    <div className='question-container'>
      {questions.map((question, idx) => {
        if (idx === currentQuestionIndex) {
          return <Question key={idx} question={question} handleClick={handleClick} currentQuestionIndex={currentQuestionIndex} numQuestions={numQuestions} />;
        }
        else {
          return <></>
        }
      })}
    </div>

  )
}

export default Game
