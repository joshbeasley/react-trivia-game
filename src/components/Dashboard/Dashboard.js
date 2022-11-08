//--------------Dashboard Imports-------------------//
import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'
//---------------Pie Chart Imports---------------//
// import "./style.css";
// import { PieChart } from "react-minimal-pie-chart";



//-------------Dashboard-----------------------//
const Dashboard = () => {
const navigate = useNavigate();
  // props
  // - num questions correct
  // - num total questions 

const questionsAnswered = [1, 1, 1, 1, 1, 0, 1, 1, 1, 0];

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
      <div>You scored {avg}%! </div>
      {/* Pie Chart */}
      <div className="pie" style={{"--p:20:--c":"red"}}> {avg}%</div>
      <div className="pie animate" style={{"--p:90:--c":"lightgreen"}}> {wrong}%</div>
      {/* Pie Chart */}
      {/* Dashboard Home Button */}
      <button onClick={() => {navigate('/',)}}>Home</button>
    </>
  )

  }
  // style={{ float:`left` }}  // Object literal notation

//-------------Dashboard------------//
export default Dashboard

//-------------Pie Chart------------//
// export default class App extends React.Component