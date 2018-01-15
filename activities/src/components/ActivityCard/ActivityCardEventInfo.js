import React from 'react';
import "./ActivityCard.css";


// TODO: CHANGE CSS FOR LINKS & LINKS HOVER ...ect

// TODO: USER ABLE TO CHOOSE BACKGROUND COLOR FOR .USER-CREATOR-INFO

// TODO: INCREASE FONT SIZE FLAKE SCORE NUMBER/DECREASE FONT SIZE "FLAKE SCORE" TEXT


export const ActivityCardEventInfo = props => {
  return(
    <div className="comp-wrap">
            <div className="event-activity">
              <strong><a href="#"> {props.activityType} </a></strong>
            </div>
            <div className="event-info">
              <p className="card-text">{props.description}</p>
            </div>
    </div>
    );
};

export default ActivityCardEventInfo;
