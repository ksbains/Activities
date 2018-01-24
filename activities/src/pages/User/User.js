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
	        user: []
	    };
	};


	componentWillMount = () => {
	    console.log("Load UserPage")
	    this.loadEvent((req, res) => {
	        console.log('UserObj', this.state.user);
	    });
	};

	loadEvent = (cb) => {
	    var str = window.location.search;
	    var id = str.substring(4, str.length);
	    UserService.getUser(id)
	        .then(res => {
	            this.setState({ user: res.data }, cb);
	        }).catch(err => console.log('UserService error', err));
	};
	render() {
		return(
			<div>
                <Navbar/>
                <User 
                	username = {this.state.user.username}
                	location = {this.state.user.location}
                	bio = {this.state.user.bio}
                	flakeScore = {this.state.user.flakeScore}
                />
			</div>
		)}
	}



export default UserPage;