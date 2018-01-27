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
			user: this.props.user,
			owner: null
	    };
	};

	componentWillMount = () => {
        console.log("Load UserPage");
        this.loadOwner(function() {
            console.log("UserObj: ", this.state.user);
        });
	};

    loadOwner = (cb) => {
	    var str = window.location.search;
	    var id = str.substring(4, str.length);
	    console.log('Owner Str', str);
	    UserService.getUser(id)
			       .then(res => {
			           this.setState({ owner: res.data}, cb);
			       }).catch(err => console.log("UserService error", err));
 	};

	render() {
		return(
			<div>
				<div className="container">
					<Navbar user={this.state.user}/>
					<User
						username = {this.state.owner?this.state.owner.username:""}
						bio = {this.state.owner?this.state.owner.bio:""}
						flakeScore = {this.state.owner?this.state.owner.flakeScore:""}
						pic = {this.state.owner?this.state.owner.pic:""}
					/>
				</div>
			</div>
		)}
	}



export default UserPage;