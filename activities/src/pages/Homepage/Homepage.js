import React, { Component } from "react";
import "./Homepage.css";
import Navbar from "../../components/Navbar/Navbar.js";
import { ActivityCard, ActivityCardUserInfo, ActivityCardEventInfo, ActivityCardWrapper } from "../../components/ActivityCard";
import ActivityService from "../../providers/ActivityService.js";

// TODO: CHANGE LOOP LENGTH TO NUBER OF EVENTS IN DATABASE. 
// USE .MAP HIGH FUNCTIONS

// Create a state to hold the list of cards (state.cards)
// Pass this state as a pop to a Card container

class Homepage extends Component {
 constructor(props) {
    super(props);
    this.expandEventCard = this.expandEventCard.bind(this);
    this.state = {
		activities: []
	};
  }

	componentDidMount = () => {
		console.log("Load Homepage")
		this.loadEvents();
	};

	loadEvents = () => {
		console.log("Load Events");
		ActivityService.getActivities()
			.then(res => this.setState({ activities: res.data }))
			.catch(err => console.log("error", err));
	};

	expandEventCard = (event, index) => {
		console.log("this-expandEventCard", this.state.activities[event])
		console.log('activity-event', event);
		console.log("activity-index", index)
	};

	filterActivity = (event, index) => {
		console.log("this-filterActivity", this.state.activities[event])
		console.log('activity-event', event);
		console.log("event-index", index)
	};

	render() {
		return(
			<div>
				<Navbar/>
				<ActivityCardWrapper>
				{this.state.activities.map((activity, index) => {
					return(
						<ActivityCard
						activityType = {activity.activityType}
						description = {activity.description}
						username = {activity.username}
						flakeScore = {activity.flakeScore}
						>
							<ActivityCardEventInfo
							onClickExpandEventCard = {this.expandEventCard.bind(this, index)}
							onClickFilterActivity = {this.filterActivity.bind(this, index)}
							activityType = {activity.activityType}
							description = {activity.description}
							/>
							<ActivityCardUserInfo
							username = {activity.username}
							flakeScore = {activity.flakeScore}
							/>							
						</ActivityCard>
				);
				})}
				</ActivityCardWrapper>

			</div>
		);
	}
}

Homepage.PropTypes = {

}

export default Homepage;