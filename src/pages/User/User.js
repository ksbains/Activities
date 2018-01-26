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
                <Navbar user={this.state.user}/>
                <User 
                	username = {this.state.users.username}
                	location = {this.state.users.location}
                	bio = {this.state.users.bio}
                	flakeScore = {this.state.users.flakeScore}
                />
			</div>
		)}
	}



export default UserPage;