import React from "react";
import "./EventDescription.css";


class EventDescription extends React.Component{


	render(){
		return(
		<div className="card text-center">
	  		<div className="card-title">
	    		<h4>Game</h4>
		  	</div>
		    <div className="card-block">
			    <h4 className="description"></h4>
			    <p className="card-text">Players needed</p>
			    <p className="card-text">Duration</p>
			    <p className="card-text">Start Time</p>
			    <p className="card-text">Family Friendly</p>
			   
		    </div>
		    <div className="card-footer">
	    		<a href="#"><h4>Go To Location</h4></a>
		  	</div>
			  
	  	</div>
		)

	}

}

export default EventDescription;