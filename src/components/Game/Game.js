import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Question from '../Question/Question';
import Dashboard from '../Dashboard/Dashboard';
import ReactLoading from "react-loading";
import './Game.css'

const Game = () => {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [questionsAnswered, setQuestionsAnswered] = useState([]);
<<<<<<< HEAD
  const [loading , setLoading] = useState(true);

=======
>>>>>>> 97f034dc40248575993a33633a6c887f766accb3
  const location = useLocation();
  console.log(location);
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
        setLoading(false);
      })
      .catch(err => alert("ERROR:", err))
  }, [numQuestions, category, difficulty, type])
  const handleClick = (event, correct) => {
    event.preventDefault();
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setQuestionsAnswered([...questionsAnswered, correct])
  }

  if(loading){
    return <ReactLoading
            className="loading"
            type={"spin"}
            color={"lightgrey"}
            height={100}
            width={100}
            />
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
