import React, { Component } from "react";
import "./User.css";
import Navbar from "../../components/Navbar/Navbar.js";
// import ActivityCard from "../../components/ActivityCard";
import User from "../../components/User";
import UserService from "../../providers/UserService";
import axios from "axios/index";

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
				<div className="container">
					<Navbar user={this.state.user}/>
					<User
						username = {this.state.user.username}
						location = {this.state.user.location}
						bio = {this.state.user.bio}
						flakeScore = {this.state.user.flakeScore}
						pic = {this.state.user.pic}
					/>
				</div>
			</div>
		)}
	}



export default UserPage;