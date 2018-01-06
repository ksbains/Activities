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
			    	//need to replace the # with a route to the Activity Forum page/module.
			        <li class="active"><a href="#">Create an Activity!</a></li>
			        <li class="dropdown">
			            <a href="#" data-toggle="dropdown" class="dropdown-toggle">Activities <b class="caret"></b></a>
			            <ul class="dropdown-menu">
			            	//these # will need to be changed by the routes to call all activites of teh certain category to display. 
			            	//may also need to add an onClick on these to render all of the Activity cards for this category
			                <li><a href="#">Basketball</a></li>
			                <li><a href="#">Beer Die</a></li>
			                <li><a href="#">Slosh Ball</a></li>
			                <li><a href="#">Spike Ball</a></li>
			                <li><a href="#">Soccer</a></li>
			                <li class="divider"></li>
			                <li><a href="#">Create new Category!</a></li>
			            </ul>
			        </li>

			        <li class="dropdown pull-right">
			        	//once logged in the Admin will need to be replaced with this.props.name to show the current user that is logged in or a default user name?
			            <a href="#" data-toggle="dropdown" class="dropdown-toggle"><img src=`http://placehold.it/18x18" class="profile-image img-circle`> Admin <b class="caret"></b></a>
			            <ul class="dropdown-menu">
			                <li><a href="#">Profile</a></li>
			                <li><a href="#">Upcoming events</a></li>
			                <li class="divider"></li>
			                <li><a href="#">Settings</a></li>
			            </ul>
			        </li>
			    </ul>
			</nav>
		);
	}
}
export default Navbar;
