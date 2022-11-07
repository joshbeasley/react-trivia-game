import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Question.css";

const Question = ({ question }) => {
	// props:
	// - individual question

	const shuffleAnswers = () => {
		let answers = [...question.incorrect_answers, question.correct_answer];
		return answers.sort((a, b) => 0.5 - Math.random());
	};
	const [answers, setAnswers] = useState(shuffleAnswers());
	const [buttons, setButtons] = useState(
		new Array(answers.length).fill(false)
	);

	// return
	// - render all question info
	// - Next question button
	//   - increments current question
	//   - increments num questions correct if question was correct

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
				<div>Difficulty: {capitalizeFirst(question.difficulty)}</div>
			</div>

			<div className="question-text">Question: {question.question}</div>
			<div onChange={handleChange}>
				{answers.map((answer, index) => {
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
							/>
							{answer}
						</div>
					);
				})}
			</div>
			<div className="buttons">
        <Link to='/'><button className="btn btn-danger btn-lg">Give up</button></Link>
				<button className="btn btn-primary btn-lg">Submit</button>
			</div>
		</div>
	);
};

export default Question;
