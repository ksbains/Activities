import React from "react";
import "./Navbar.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads
//acces props via this.props
class Navbar extends React.Component {
	//Method declartion
	//updateCount = (event) => {}
	render () {
		return (
			<nav className="navbar ">
			    <ul class="nav nav-pills">
			        <li className="active"> <a href="#">Create an Activity!</a> </li>
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
			            <a href="#" data-toggle="dropdown" className="dropdown-toggle"><img src="http://placehold.it/18x18" className="profile-image img-circle"/> UserName <b className="caret"></b></a>
			            <ul className="dropdown-menu">
			                <li><a href="#">Profile</a></li>
			                <li><a href="#">Upcoming events</a></li>
			                <li className="divider"></li>
			                <li><a href="#">Settings</a></li>
			            </ul>
			        </li>
			    </ul>
			</nav>
		);
	}
}
export default Navbar;
