import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Question.css";
import styled from "styled-components";
import {decode} from 'html-entities';

const Radio = styled.div`
  color: ${props => props.correct ? "green" : "red"};
`;

const Question = ({ question, handleClick, currentQuestionIndex, numQuestions }) => {

	const shuffleAnswers = () => {
    let incorrect_answers = question.incorrect_answers.map(answer => decode(answer));
		let answers = [...incorrect_answers, decode(question.correct_answer)];
		return answers.sort((a, b) => 0.5 - Math.random());
	};
	const [answers, setAnswers] = useState(shuffleAnswers());
	const [buttons, setButtons] = useState(
		new Array(answers.length).fill(false)
	);
  const [correctAnswer, setCorrectAnswer] = useState(question.correct_answer);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(0);


  const handleSubmitClick = (event) => {
    event.preventDefault();
    if(buttons.indexOf(true) === -1){
      alert("Please select an answer choice!");
    }
    else {
      if(answers.indexOf(correctAnswer) === buttons.indexOf(true)){
        setCorrect(1);
      }
      setAnswered(true);
    }
  }

  const handleNextQuestionClick = (event) => {
    handleClick(event, correct);
  }

	const capitalizeFirst = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	const handleChange = (e) => {
		let newState = Array(answers.length).fill(false);
		newState[e.target.value] = true;
		setButtons(newState);
	};

	return (
		<div className="question">
			<div className="top-bar">
				<div>{question.category}</div>
        <div>Question: {currentQuestionIndex + 1}/{numQuestions}</div>
				<div>Difficulty: {capitalizeFirst(question.difficulty)}</div>
			</div>

			<div className="question-text" style={{fontWeight: "bolder"}}>Question: {decode(question.question)}</div>
			<div onChange={handleChange}>
				{answers.map((answer, index) => {
          if(answered){
            return (
              <Radio
                className="form-check"
                key={index}
                id={`radio-div-${index}`}
                correct={answers.indexOf(correctAnswer) === index}
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="question"
                  value={index}
                  id={`radio-${index}`}
                  defaultChecked={buttons[index]}
                  disabled={true}
                />
                {answer}
              </Radio>
            )
          } else {
            return (
              <div
                className="form-check"
                key={index}
                id={`radio-div-${index}`}
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="question"
                  value={index}
                  id={`radio-${index}`}
                  defaultChecked={buttons[index]}
                />
                {answer}
              </div>
					);}})
				}
      </div>
			<div className="buttons">
        <Link to='/'><button className="btn btn-danger btn-lg px-5">Give up</button></Link>
        {answered ? <button className="btn btn-primary btn-lg px-5" onClick={handleNextQuestionClick}>Next Question</button> :
         <button className="btn btn-primary btn-lg px-5" onClick={handleSubmitClick}>Submit</button>
        }
			</div>
		</div>
	);
};

export default Question;
