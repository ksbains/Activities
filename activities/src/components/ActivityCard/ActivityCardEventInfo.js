import React from 'react';
import "./ActivityCard.css";

export class ActivityCardEventInfo extends React.Component {
  render() {
  return(
    <div>
      <div className="event-created-info col-sm-8 col-md-8 col-lg-8">
          <div className="event-activity">
            <strong><a href="#"> {this.props.activityType} </a></strong>
          </div>
          <div className="event-info">
            <p className="card-text">{this.props.description}</p>
          </div>
      </div>
    </div>
 
    );
};
};

