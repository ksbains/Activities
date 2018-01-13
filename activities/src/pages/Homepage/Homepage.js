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
		this.loadEvents();
	};

	loadEvents = () => {
		ActivityService.getActivities()
			.then(res => this.setState({ activities: res.data }))
			.catch(err => console.log(err));
	};

		render() {
			return(
				<div>
					<Navbar/>
					{this.state.activities.map(activity => {
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