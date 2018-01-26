import React, { Component } from "react";
import ActivityService from "../../providers/ActivityService.js";
import "./Navbar.css";




export class Dropdown extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			listItem: []
		}
	}
	componentWillMount() {
		ActivityService.getActivities()
			.then(res => {
				this.setState({listItem: res.data});
			}).catch(err => console.log('err', err))
	};

handleClick = (activityType) => {
	ActivityService.getActivityTypes(activityType)
		.then(res => {
	console.log("HANDLECLICK RES", res);
});
};


render() {
	return(
	<li className="dropdown">
		<a href="#" data-toggle="dropdown" className="dropdown-toggle">Activities <b className="caret"></b></a>
		<ul className="dropdown-menu">
		{this.state.listItem.map(res => {
			return(
				<li>
					<p 
						onClick={this.handleClick.bind(this, res.activityType)}
					>
						{res.activityType}
					</p>
				</li>
			)
		})}
		<li className="divider"></li>
    	<li><a href="#">Create new Category!</a></li>
		</ul>
	</li>
		)
}
}


// <a href="#" data-toggle="dropdown" className="dropdown-toggle">Activities <b className="caret"></b></a>
// <ul className="dropdown-menu">
// 	<li><a href="#">Basketball</a></li>
//     <li><a href="#">Beer Die</a></li>
//     <li><a href="#">Slosh Ball</a></li>
//     <li><a href="#">Spike Ball</a></li>
//     <li><a href="#">Soccer</a></li>
//     <li className="divider"></li>
//     <li><a href="#">Create new Category!</a></li>
// </ul>

