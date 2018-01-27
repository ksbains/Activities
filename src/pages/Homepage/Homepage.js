// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "./Homepage.css";
// import Navbar from "../../components/Navbar/Navbar.js";
// import { ActivityCard, ActivityCardUserInfo, ActivityCardEventInfo, ActivityCardWrapper } from "../../components/ActivityCard";
// import ActivityService from "../../providers/ActivityService.js";
// import UserService from "../../providers/UserService.js";

// // TODO: CHANGE LOOP LENGTH TO NUBER OF EVENTS IN DATABASE. 
// // USE .MAP HIGH FUNCTIONS

// // Create a state to hold the list of cards (state.cards)
// // Pass this state as a pop to a Card container

// class Homepage extends Component {
//  constructor(props) {
//     super(props);
//     this.expandEventCard = this.expandEventCard.bind(this);
//     this.state = {
// 		activitiesCards: [],
// 		user: this.props.user
// 	};
//   }

// 	componentWillMount = () => {
// 		this.loadEvents();
//         // console.log("Homepage state", this.state);
// 	};

//  	componentDidMount = () => {
//  		// console.log("homepage props",this.props);
// 	}

// 	loadEvents = () => {
// 		let tempAct = [];
// 		let tempUser = [];
// 		let combinedArray = [];
// 		ActivityService.getActivities()
// 			.then(actRes => {
// 				tempAct.push(actRes.data)
// 				for (let i = 0; i < actRes.data.length; i++){
// 					UserService.getUser(actRes.data[i]._id)
// 						.then(userRes => {
// 							tempUser.push(userRes.data)
						
// 						for (let j = 0; j < tempAct.length; j++){
// 							let tempObject = {};
// 							tempObject.activity = tempAct[j]
// 							tempUser.user = tempUser[j]
// 							combinedArray.push(tempObject)
// 						}
// 						}).catch(err => console.log('err', err))}
// 			}).catch(err => console.log('err', err))
// 		};

// 	expandEventCard = (index) => {
// 		// console.log("this-expandEventCard", this.state.activities[index])
// 	};

// 	expandUserInfo = (index) => {
// 		// console.log("this-expandUserCard", this.state.users[index])
// 	};

// 	filterActivity = (index) => {
// 		// console.log("this-filterActivity", this.state.activities[index])
// 	};

// 	render() {
// 		return(
// 			<div>
// 				<Navbar user={this.state.user}/>
// 				<ActivityCardWrapper>
// 				{this.state.activities.map((activity, index) => {
// 					return(
// 						<ActivityCard
// 							id = {activity._id}
// 							activityType = {activity.activityType}
// 							description = {activity.description}
// 							username = {activity.creator.username}
// 							flakeScore = {activity.creator.flakeScore}
// 						>
//             				<Link to={'/event?id=' + activity._id}>
// 								<ActivityCardEventInfo
// 									onClickExpandEventCard = {this.expandEventCard.bind(this, index)}
// 									onClickFilterActivity = {this.filterActivity.bind(this, index)}
// 									activityType = {activity.activityType}
// 									description = {activity.description}
// 								/>
// 							</Link>
//           					<Link to={'/user?id=' + activity.creator._id}>
// 								<ActivityCardUserInfo
// 									onClickExpandUserInfo = {this.expandUserInfo.bind(this, index)}
// 									username = {activity.creator.username}
// 									flakeScore = {activity.creator.flakeScore}
// 								/>							
// 							</Link>
// 						</ActivityCard>
// 					);
// 				})}
// 				</ActivityCardWrapper>

// 			</div>
// 		);
// 	}
// }

// Homepage.PropTypes = {

// }

// export default Homepage;




import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import Navbar from "../../components/Navbar/Navbar.js";
import { ActivityCard, ActivityCardUserInfo, ActivityCardEventInfo, ActivityCardWrapper } from "../../components/ActivityCard";
import ActivityService from "../../providers/ActivityService.js";
import UserService from "../../providers/UserService.js";
import axios from "axios";

// TODO: CHANGE LOOP LENGTH TO NUBER OF EVENTS IN DATABASE. 
// USE .MAP HIGH FUNCTIONS

// Create a state to hold the list of cards (state.cards)
// Pass this state as a pop to a Card container

class Homepage extends Component {
 constructor(props) {
    super(props);
    this.expandEventCard = this.expandEventCard.bind(this);
    this.state = {
		activities: [],
		users: [],
		combined: [],
		user: this.props.user
	};
  }

	componentWillMount = () => {
		this.loadEvents();
	};

 	componentDidMount = () => {
 		console.log("homepage props",this.props);
        axios.get('/user').then(response => {
            console.log("User Authentication check in app.js", response.data);
            if (response.data.user) {
                console.log('THERE IS A USER');
                this.setState({
                    loggedIn: true,
                    user: response.data.user
                }, function (){
                    console.log("this is call after the setState, going into render");
                    this.render();
                });
            }
            console.log("this is the username within willmount of route", response.data.user);
            this.render();
        })
	}

	loadEvents = () => {
		var activitiesArray = [];
		var usersArray = [];
		var combinedArray = [];
		ActivityService.getActivities()
			.then(res => {
				this.setState({ activities: res.data })
				for (let i = 0; i < res.data.length; i++) {
					activitiesArray.push(res.data[i]);
					}
			UserService.getUsers()
			.then(res2 => {
				this.setState({ users: res2.data })
				for (let j = 0; j < res2.data.length; j++) {
					usersArray.push(res2.data[j]);
					}

				for (let k = 0; k < activitiesArray.length; k++) {	
					var tempObject = {};
					tempObject.activity = activitiesArray[k]
					tempObject.user = usersArray[k]
					combinedArray.push(tempObject)
				}
				this.setState({ combined: combinedArray})
			})
				.catch(err => console.log("error", err));
		})
			.catch(err => console.log("error", err));
		
	};



	expandEventCard = (index) => {
		// console.log("this-expandEventCard", this.state.activities[index])
	};

	expandUserInfo = (index) => {
		// console.log("this-expandUserCard", this.state.users[index])
	};

	filterActivity = (index) => {
		// console.log("this-filterActivity", this.state.activities[index])
	};

	render() {
		return(
			<div>
				<div className="container">
                    <Navbar user={this.state.user}/>
						<ActivityCardWrapper>
						{this.state.combined.map((object, index) => {
							return(
								<ActivityCard
									id = {object.activity._id}
									activityType = {object.activity.activityType}
									description = {object.activity.description}
									username = {object.user.username}
									flakeScore = {object.user.flakeScore}
								>
									<Link to={'/event?id=' + object.activity._id}>
										<ActivityCardEventInfo
											onClickExpandEventCard = {this.expandEventCard.bind(this, index)}
											onClickFilterActivity = {this.filterActivity.bind(this, index)}
											activityType = {object.activity.activityType}
											description = {object.activity.description}
										/>
									</Link>
									<Link to={'/user?id=' + object.user._id}>
										<ActivityCardUserInfo
											onClickExpandUserInfo = {this.expandUserInfo.bind(this, index)}
											username = {object.user.username}
											flakeScore = {object.user.flakeScore}
										/>
									</Link>
								</ActivityCard>
							);
						})}
						</ActivityCardWrapper>
				</div>
			</div>
		);
	}
}

Homepage.PropTypes = {

}

export default Homepage;