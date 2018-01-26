import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import axios from 'axios';



// By importing the Header.css file, it is added to the DOM whenever this component loads
//acces props via this.props
class Navbar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			user: this.props.user
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
        })
    }

    handleLogin = () => {
        axios.get('register').then(res => {
            console.log("handleLogin()");
        })
    }

	render () {

		let createActivity = null;
		let logout = null;
		let login = null;

		if(this.state.user) {
			createActivity = <li className="active"> <Link to='/activity'>Create an Activity!</Link> </li>;
			logout = <li><button onClick={this.handleLogout.bind(this)}>Log Out</button></li>;
		} else {
			login = <li><Link to='/login'><button>Log In</button></Link></li>
		}

		return (
			<nav className="navbar ">
			    <ul className="nav nav-pills">
                    <li className="btn-info"> <Link to='/'>Homepage</Link> </li>
					{createActivity}
			        <li className="dropdown">
			            <a href="#" data-toggle="dropdown" className="dropdown-toggle">Activities <b className="caret"></b></a>
			            <ul className="dropdown-menu">
			            	<li><a href="#">Basketball</a></li>
			                <li><a href="#">Beer Die</a></li>
			                <li><a href="#">Slosh Ball</a></li>
			                <li><a href="#">Spike Ball</a></li>
			                <li><a href="#">Soccer</a></li>
			                <li className="divider"></li>
			                <li><a href="#">Create new Category!</a></li>
			            </ul>
			        </li>
			        <li className="dropdown pull-right">
			            <a href="#" data-toggle="dropdown" className="dropdown-toggle"><img className="navbarPic" src={this.state.user ? this.state.user.pic :"http://placehold.it/18x18"} className="profile-image img-circle"/> {this.state.user ? this.state.user.username : ''} <b className="caret"></b></a>
			            <ul className="dropdown-menu">
			                <li><Link to='/user'>Profile</Link></li>
			                <li><a href="#">Upcoming events</a></li>
			                <li className="divider"></li>
			                <li><Link to='/settings'>Settings</Link></li>
							{login}
							{logout}
			            </ul>
			        </li>
			    </ul>
			</nav>
		);
	}
}
export default Navbar;
