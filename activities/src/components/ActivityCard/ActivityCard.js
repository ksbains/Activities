import React from "react";
import "./ActivityCard.css";

// TODO: CHANGE CSS FOR LINKS & LINKS HOVER ...ect

// TODO: USER ABLE TO CHOOSE BACKGROUND COLOR FOR .USER-CREATOR-INFO

// TODO: INCREASE FONT SIZE FLAKE SCORE NUMBER/DECREASE FONT SIZE "FLAKE SCORE" TEXT


export class ActivityCard extends React.Component{
  render() {
    return(
    <div className="activity-card-area">
      <div className="activity-card-container container">
        <div className="row">
            { this.props.children }
        </div>
      </div>
    </div>
    )
  }
}

