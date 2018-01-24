import React, { Component } from "react";
import "./User.css";
import Navbar from "../../components/Navbar/Navbar.js";
// import ActivityCard from "../../components/ActivityCard";
import User from "../../components/User";
import UserService from "../../providers/UserService";

class UserPage extends Component {
    state = {
    	user: {}
    };

    componentWillMount = () => {
    	console.log("Load UserPage")
    	this.loadEvent(() => {
    		console.log('give me user object PLEASE', this.state.user);
    	});
    };

    loadEvent = () => {
    	var str = window.location.search;
    	var id = str.substring(3, str.length);
    	console.log('USER id', id);
    	UserService.getUser(id)
    	.then(res => {
    		this.setState({user: res.data})
    		console.log("STATE.USER", this.state.user)
    	}).catch(err => console.log('error', err));
    };

	render() {
		return(
			<div>
                <Navbar/>
                <User 
                	username = {this.state.user.username}
                	username = {this.state.user.location}
                	username = {this.state.user.bio}
                	username = {this.state.user.flakeScore}
                />
			</div>
			)
	}
}


export default UserPage;