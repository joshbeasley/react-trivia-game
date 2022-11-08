//--------------Dashboard Imports-------------------//
import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'
//---------------Pie Chart Imports---------------//
// import "./style.css";
// import { PieChart } from "react-minimal-pie-chart";



//-------------Dashboard-----------------------//
const Dashboard = (
  {questionsAnswered}
) => {
const navigate = useNavigate();
  // props
  // - num questions correct
  // - num total questions 

let total = 0;
for(let i = 0; i < questionsAnswered.length; i++) {
    total += questionsAnswered[i];
}
var avg = total / questionsAnswered.length * 100;
var wrong = 100 - avg 

//----------------Pie Chart--------------------//


  return (
    <>
      {/* Dashboard Average */}
      <div className="work">You scored!</div>
      {/* Pie Chart */}
      <svg viewBox="0 0 36 36" class="circular-chart">
        <path className="circle"
        strokeDasharray={`${avg}, 100`}
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="6.25" y="20.35" className="percentage" fontSize=".65rem" fill="#09ed24">{avg}%</text>
      </svg>
      {/* Dashboard Home Button */}
      <div className="button"><button onClick={() => {navigate('/',)}}>Main Menu</button></div>
      
    </>
  )

  }
  // style={{ float:`left` }}  // Object literal notation

//-------------Dashboard------------//
export default Dashboard

//-------------Pie Chart------------//
// export default class App extends React.Component