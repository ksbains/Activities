import React, { Component } from "react";
import "./Homepage.css";
import Navbar from "../../components/Navbar/Navbar.js";
import ActivityCard from "../../components/ActivityCard";


// TODO: CHANGE LOOP LENGTH TO NUBER OF EVENTS IN DATABASE. 
// USE .MAP HIGH FUNCTIONS

function generateCards() {
	var cardBank = [];

	for (let i = 0; i < 3; i++) {
		cardBank.push(<ActivityCard/>);
	}
	return cardBank
}

class Homepage extends Component {
	render() {
		return(
			<div>
				<Navbar/>
				{generateCards()}
			</div>
			)
	}
}


export default Homepage;