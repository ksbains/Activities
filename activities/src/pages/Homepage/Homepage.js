import React, { Component } from "react";
import "./Homepage.css";
import Navbar from "../../components/Navbar/Navbar.js";
import ActivityCard from "../../components/ActivityCard";
import ActivityService from "../../providers/ActivityService.js";

// TODO: CHANGE LOOP LENGTH TO NUBER OF EVENTS IN DATABASE. 
// USE .MAP HIGH FUNCTIONS


// Create a state to hold the list of cards (state.cards)
// Pass this state as a pop to a Card container

class Homepage extends Component {

	state = {
		activities: []
	};

	componentDidMount = () => {
		console.log("Load Homepage")
		this.loadEvents();
	};

	loadEvents = () => {
		// let state = { activities: [] };
		console.log("Load Events");
		ActivityService.getActivities()
			.then(res => {
				console.log("After find()", res.data) 	
				this.loadEvents.setState({ activities: res.data })
			} )
			.catch(err => console.log("error", err));
			// console.log(this.loadEvents.state)
	};

		render() {
			return(
				<div>
					<Navbar/>
					{this.state.activities.map(activity => {
						console.log(activity)
						return(
							<ActivityCard
							activityType = {activity.activityType}
							description = {activity.description}
							/>
						);
					})}
				</div>
			);
		}
	}


export default Homepage;