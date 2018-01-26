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

	componentWillMount = () => {
        axios.get('/user').then(response => {
            console.log("User Authentication check in app.js", response.data);
            if (response.data.user) {
                console.log('THERE IS A USER');
                this.loadEvent((req, res) => {
                    console.log('UserObj', this.state.user);
                });
            }
            console.log("this is the username within willmount of route", response.data.user);
            this.render();
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
				<div className="container">
					<Navbar user={this.state.user}/>
					<User
						username = {this.state.users.username}
						location = {this.state.users.location}
						bio = {this.state.users.bio}
						flakeScore = {this.state.users.flakeScore}
					/>
				</div>
			</div>
		)}
	}



export default UserPage;