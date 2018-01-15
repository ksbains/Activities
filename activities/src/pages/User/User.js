import React, { Component } from "react";
import "./User.css";
import Navbar from "../../components/Navbar/Navbar.js";
// import ActivityCard from "../../components/ActivityCard";
import User from "../../components/User";

class UserPage extends Component {

    state = {

    };

	render() {
		return(
			<div>
                <Navbar/>
                <User/>
                {/*<ActivityCard/>*/}
			</div>
			)
	}
}


export default UserPage;