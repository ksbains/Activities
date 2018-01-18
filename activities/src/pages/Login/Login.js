import React, { Component } from "react";
import "./Login.css";
//import Navbar from "../../components/Navbar/Navbar.js";
// import ActivityCard from "../../components/ActivityCard";
import Login from "../../components/Login";

class LoginPage extends Component {

    state = {

    };

	render() {
		return(
			<div>
                {/*<Navbar/>*/}
                <Login/>
                {/*<ActivityCard/>*/}
			</div>
			)
	}
}


export default LoginPage;