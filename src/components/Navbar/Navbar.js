import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { Dropdown } from "./Dropdown.js"
import axios from 'axios';

// By importing the Header.css file, it is added to the DOM whenever this component loads
//acces props via this.props
class Navbar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			user: this.props.user,
			activityType: this.props.activityType
		}
	}

	componentDidMount() {
		console.log("navbar state", this.state);

	}

    handleLogout = () => {
		axios.post('logout').then(res => {
			console.log("handleLogout()");
			this.setState({
				user: null
			})
			window.location.reload();
        })
    }

    handleLogin = () => {
        axios.get('register').then(res => {
            console.log("handleLogin()");
        })
    }

	render () {

		let createActivity = null;
		let login = null;
		let user = null;
		let loginDropdown = null;

		let style = {
			margin: '0px 20px'
		}

		if(this.state.user) {
			createActivity = <li className="active"> <Link to='/activity'>Create an Activity!</Link> </li>;
            loginDropdown = <ul className="dropdown-menu"><li className="active"> <Link to='/activity'>Create an Activity!</Link> </li> <li><Link to='/user'>Profile</Link></li> <li><Link to='/settings'>Settings</Link></li><li><button style={style} onClick={this.handleLogout.bind(this)}>Log Out</button></li></ul>;
            user = <a href="#" data-toggle="dropdown" className="dropdown-toggle"><img className="navbarPic" src={this.state.user ? this.state.user.pic :"http://placehold.it/18x18"} className="profile-image img-circle"/> {this.state.user ? this.state.user.username : ''} <b className="caret"></b></a>;

        } else {
			login = <li><Link to='/login'><button>Log In</button></Link></li>
		}

		return (
			<nav className="navbar">
			    <ul className="nav nav-pills">
                    <li className="btn-info"> <Link to='/'>Homepage</Link> </li>
                    <li className="active"> <Link to='/activity'>Create an Activity!</Link> </li>
			         	<Dropdown/>
			        <li className="dropdown pull-right">
						{login}
						{user}
						{loginDropdown}
			        </li>
			    </ul>
			</nav>
		);
	}
}
export default Navbar;


// import React from "react";
// import "./Navbar.css";
// import { Link } from 'react-router-dom';
// import ActivityService from "../../providers/ActivityService.js";


// // By importing the Header.css file, it is added to the DOM whenever this component loads
// //acces props via this.props
// class Navbar extends React.Component {

// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			user: this.props.user
// 		}
// 	}

// 	render () {
// 		return (
// 			<nav className="navbar ">
// 			    <ul className="nav nav-pills">
//                     <li className="btn-info"> <Link to='/'>Homepage</Link> </li>
//                     <li className="active"> <Link to='/activity'>Create an Activity!</Link> </li>
// 			        <li className="dropdown">
// 			            <a href="#" data-toggle="dropdown" className="dropdown-toggle">Activities <b className="caret"></b></a>
// 			            <ul className="dropdown-menu">
// 			            	<li><a href="#">Basketball</a></li>
// 			                <li><a href="#">Beer Die</a></li>
// 			                <li><a href="#">Slosh Ball</a></li>
// 			                <li><a href="#">Spike Ball</a></li>
// 			                <li><a href="#">Soccer</a></li>
// 			                <li className="divider"></li>
// 			                <li><a href="#">Create new Category!</a></li>
// 			            </ul>
// 			        </li>
// 			        <li className="dropdown pull-right">
// 			            <a href="#" data-toggle="dropdown" className="dropdown-toggle"><img src="http://placehold.it/18x18" className="profile-image img-circle"/> {this.state.user ? this.state.user.username : ''} <b className="caret"></b></a>
// 			            <ul className="dropdown-menu">
// 			                <li><Link to='/user'>Profile</Link></li>
// 			                <li><a href="#">Upcoming events</a></li>
// 			                <li className="divider"></li>
// 			                <li><Link to='/settings'>Settings</Link></li>

// 							<li><form id="logout" name="logout" method="post" action="/logout" aria-hidden="false">
//                                 <input class="btn btn-default" type="submit" value="Log Out" />
// 							</form></li>
// 			            </ul>
// 			        </li>
// 			    </ul>
// 			</nav>
// 		);
// 	}
// }
// export default Navbar;
