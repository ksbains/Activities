import React from "react";
import "./EventDescription.css";


class EventDescription extends React.Component{


	render(){
		return(
		<div className="col-md-12">
           <div className="panel panel-blue">
            <div className="panel-heading">Event Description</div>
            <div className="panel-body">{this.props.description}</div>
          </div>
        </div>
		)

	}

}

export default EventDescription;