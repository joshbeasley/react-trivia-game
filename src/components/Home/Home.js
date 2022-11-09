import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Home.css'

const Home = () => {

  const [numQuestions, setNumQuestions] = useState(10);
  const [category, setCategory] = useState('Any');
  const [difficulty, setDifficulty] = useState('Any');
  const [type, setType] = useState('Any');
  const handleQuestionsChange = (event) => {
    setNumQuestions(event.target.value);
  }
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  }
  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  }
  const handleTypeChange = (event) => {
    setType(event.target.value);
  }

  return (
    <div className='form'>
      <form>
        <div className="form-group">
          <label htmlFor="enter-num-questions">Number of Questions:</label>
          <input type='number' className="form-control" id="enter-num-questions" placeholder="10" value={numQuestions} onChange={handleQuestionsChange} />
          <small id="emailHelp" className="form-text">Each trivia game can be played with up to 50 questions</small>
        </div>
        <div className="form-group">
          <label htmlFor="select-category">Select Category:</label>
          <select className="form-select" aria-label="Default select example" id='select-category' value={category} onChange={handleCategoryChange}>
            <option value='Any'>ANY</option>
            <option value="27">ANIMALS</option>
            <option value="25">ART</option>
            <option value="16">BOARD GAMES</option>
            <option value="10">BOOKS</option>
            <option value="32">CARTOON & ANIMIATIONS</option>
            <option value="26">CELEBITIES</option>
            <option value="29">COMICS</option>
            <option value="18">COMPUTERS</option>
            <option value="11">FILM</option>
            <option value="30">GADGETS</option>
            <option value="9">GENERAL KNOWLEDGE</option>
            <option value="22">GEOGRAPHY</option>
            <option value="23">HISTORY</option>
            <option value="31">JAPANESE ANIME & MANGA</option>
            <option value="19">MATHEMATICS</option>
            <option value="12">MUSIC</option>
            <option value="13">MUSICALS & THEATRES</option>
            <option value="20">MYTHOLOGY</option>
            <option value="24">POLITICS</option>
            <option value="17">SCIENCE & NATURE</option>
            <option value="21">SPORTS</option>
            <option value="14">TELEVISION</option>
            <option value="28">VEHICLES</option>
            <option value="15">VIDEO GAMES</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="select-difficulty">Select Difficulty:</label>
          <select className="form-select" aria-label="Default select example" id='select-difficulty' value={difficulty} onChange={handleDifficultyChange}>
            <option value="Any">ANY</option>
            <option value="easy">EASY</option>
            <option value="medium">MEDIUM</option>
            <option value="hard">HARD</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="select-type">Select Type:</label>
          <select className="form-select" aria-label="Default select example" id='select-type' value={type} onChange={handleTypeChange}>
            <option value="ANY">ANY</option>
            <option value="multiple">MULTIPLE CHOICE</option>
            <option value="boolean">TRUE/FALSE</option>
          </select>
        </div>
      </form>
      <div className='button'>
        <Link to='/game' state={{ numQuestions, category, difficulty, type }}><button className='btn btn-primary'>Let's Play Some Trivia!</button></Link>
      </div>
    </div>
  )
}

export default Home
