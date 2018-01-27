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

	componentDidMount() {
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