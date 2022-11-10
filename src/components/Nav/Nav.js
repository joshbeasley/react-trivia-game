import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {

  const [tod, setTod] = useState({});

  const hashCode = (str) => {
    for(var ret = 0, i = 0, len = str.length; i < len; i++) {
      ret = (31 * ret + str.charCodeAt(i)) << 0;
    }
    return Math.abs(ret);
  };

  const generateTriviaOfTheDay = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    today = hashCode(today);
    let category = today % 23 + 9;

    return {numQuestions: 10, category: category, difficulty: 'hard', type: 'Any'}
  }

  useEffect(() => {
    setTod(generateTriviaOfTheDay());
  }, [])

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link to='/' style={{ textDecoration: 'none' }}>
				<button className="navbar-brand btn btn-default navbar-btn">
					<img src="https://user-images.githubusercontent.com/110724575/200665997-c1bf185a-37d8-48ea-a139-faf27c40c4d9.png" alt="ReacTrivia Logo" width="35" />
					ReacTrivia
				</button>
			</Link>
			<button 
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link to='/' style={{ textDecoration: 'none' }}>
							<button className="nav-link btn btn-default navbar-btn">
								Home
							</button>
						</Link>
					</li>
					<li className="nav-item">
						<Link to='/leaderboard' style={{ textDecoration: 'none' }}>
							<button className="nav-link btn btn-default navbar-btn">
								Leaderboard
							</button>
						</Link>
					</li>
					<li className="nav-item">
						<Link to='/game' state={ tod } style={{ textDecoration: 'none' }}>
							<button className="nav-link btn btn-default navbar-btn">
								Trivia of the Day
							</button>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
