import React from "react";
import "./EventDescription.css";


export default class EventDescription extends React.Component {
  render(){
  	return(
      <div>
  		<div className="container" id="eventDescription">
      <div className="col-md-12">
          <div><h1>{this.props.activityType}</h1></div>
          <div><h3>{this.props.date.substring(0,10)}</h3></div>
          <div><h3>{this.props.time}</h3></div>
          <div><h3>{this.props.duration}</h3></div>
             <div className="panel panel-blue">
              <div className="panel-heading"><h4>Event Description</h4></div>
              <div className="panel-body">{this.props.description}</div>
            </div>
          </div>
      </div>
    </div>
  	)
  }
}
