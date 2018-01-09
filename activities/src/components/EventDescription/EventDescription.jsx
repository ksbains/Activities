import React from "react";
import "./EventDescription.css";


class EventDescription extends React.Component{


	render(){
		return(
		<div className = "description">
			 
				<ul className="events"> <h4>Event</h4></ul>
					<ul>Soccer</ul>
					<ul>Location</ul>
					<ul>Time</ul>
					<ul>Duration</ul>	
				
		</div>
		)

	}

}

export default EventDescription;