import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import User from "../../components/User";
import EventDescription from "../../components/EventDescription";
//import { Comment, CommentBox, CommentForm, CommentList, Data } from "../../components/Chat";
import "./Event.css";
import GoogleMap from "../../components/GoogleMap";

export class EventPage extends Component {

	state = {

	};

	render() {
		return (
			<div>
				<Navbar/>
				<div className="container">
					<div className="row">
						<div className="col-md-3"> 
						<User/>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12"> 
						<GoogleMap/>
						</div>
					</div>
					
					<div className="row">
						<div className="col-md-3">
						<EventDescription/>
						</div>
					</div>
					<div className="row">
						<div className="col-md-3">
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default EventPage;
