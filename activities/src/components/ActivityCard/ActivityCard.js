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
         {/*} <div className="col-sm-8 col-md-8 col-lg-8">
            <div className="event-substance">
              <div className="event-activity">
                <strong><a href="#"> {this.props.activityType} </a></strong>
              </div>
              <div className="event-info">
                <p className="card-text">{this.props.description}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4 user-creator-info">
              <div className="user-created">     
                <strong>{this.props.username}</strong>
              </div>
              <div className="user-profile-picture">
                <img src="https://thumbs.dreamstime.com/b/little-female-pomeranian-pet-show-dog-22237703.jpg" className="user-profile-picture img-circle"></img>
              </div>
              <div className="user-flake-score">
                <strong>{this.props.flakeScore}</strong>
              </div>
          </div> */}
            { this.props.children }
        </div>
      </div>
    </div>
    )
  }
}

export default ActivityCard;