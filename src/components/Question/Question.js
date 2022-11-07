import React from 'react'
import './Question.css'

const Question = ({question}) => {
  // props:
  // - individual question


  // return
  // - render all question info
  // - Next question button
  //   - increments current question
  //   - increments num questions correct if question was correct
  return (
    <div>Question: {question.question}</div>
  )
}

export default Question