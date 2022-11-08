import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link to='/' style={{ textDecoration: 'none' }}>
				<button className="navbar-brand btn btn-default navbar-btn">
					<img src="https://user-images.githubusercontent.com/110724575/200665997-c1bf185a-37d8-48ea-a139-faf27c40c4d9.png" width="35" />
					ReacTrivia
				</button>
			</Link>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<Link to='/' style={{ textDecoration: 'none' }}>
							<button class="nav-link btn btn-default navbar-btn">
								Home
							</button>
						</Link>
					</li>
					<li class="nav-item">
						<Link to='/leaderboard' style={{ textDecoration: 'none' }}>
							<button class="nav-link btn btn-default navbar-btn">
								Leaderboard
							</button>
						</Link>
					</li>
					<li class="nav-item">
						<Link to='/game' style={{ textDecoration: 'none' }}>
							<button class="nav-link btn btn-default navbar-btn">
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
