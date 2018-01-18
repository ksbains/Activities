import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import User from "../../components/User";
import EventDescription from "../../components/EventDescription";
import { Comment, CommentBox, CommentForm, CommentList, Data } from "../../components/Chat";
import "./Event.css";

export class Event extends Component {
	render(){
		return (
			<div>
				<Navbar/>
					<div className="container">
						<div className="row">
							<div className="col-md-5"> 
							<User/>
							</div>
						</div>
						<div className="row">
							<div className="col-md-5">
							<EventDescription/>
							</div>
						</div>
						<div className="row">
							<div className="col-md-5">
							<Comment/>
							</div>
						</div>
					</div>
			</div>
		)
	}
}

