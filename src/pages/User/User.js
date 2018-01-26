import React, { Component } from "react";
import "./User.css";
import Navbar from "../../components/Navbar/Navbar.js";
// import ActivityCard from "../../components/ActivityCard";
import User from "../../components/User";
import UserService from "../../providers/UserService";

class UserPage extends Component {
	constructor(props) {
	    super(props)
	    this.state = {
	        users: [],
			user: this.props.user
	    };
	};

	render() {
		return(
			<div>
                <Navbar user={this.state.user}/>
                <User 
                	username = {this.state.user.username}
                	location = {this.state.user.location}
                	bio = {this.state.user.bio}
                	pic = {this.state.user.pic}
                	flakeScore = {this.state.user.flakeScore}
                />
			</div>
		)}
	}



export default UserPage;