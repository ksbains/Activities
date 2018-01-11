import React, { Component } from "react";
import "./Homepage.css";
import Navbar from "../../components/Navbar/Navbar.js";
import ActivityCard from "../../components/ActivityCard";
import ActivityService from "../../providers/ActivityService.js";
// TODO: CHANGE LOOP LENGTH TO NUBER OF EVENTS IN DATABASE. 
// USE .MAP HIGH FUNCTIONS


// Create a state to hold the list of cards (state.cards)
// Pass this state as a pop to a Card container




function generateCards() {
	ActivityService.getActivities()
	.then(res => {
		console.log('response',res.data);
		this.setState({
			cards: res.data
		});
		// var cardBank = [];
		// res.data.map(x => {
		// 	cardBank.push(<ActivityCard descrition={x.name}/>);
		// })
	})
	.catch(e => {
		console.log('error',e);
	});
	return '';
}

class Homepage extends Component {
	render() {
		return(
			<div>
				<Navbar/>
				<ActivityCard items={this.state.cards}/>
				{ generateCards() }
			</div>
			)
	}
}


export default Homepage;