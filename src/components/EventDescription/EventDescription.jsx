import React from "react";
import "./EventDescription.css";


export default class EventDescription extends React.Component {
  render(){
  	return(
      <div>
  		<div className="container" id="eventDescription">
      <div className="col-md-12">
             <div className="panel panel-blue">
              <div className="panel-heading">Event Description</div>
              <div className="panel-body">{this.props.description}</div>
            </div>
          </div>
      </div>
    </div>
  	)
  }
}
