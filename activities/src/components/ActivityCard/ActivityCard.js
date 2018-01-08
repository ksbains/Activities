import React from "react";
import "./ActivityCard.css";


// TODO: /* CHANGE THE CSS FOR THE HOVER EVENT in ActivityCard.CSS*/

class ActivityCard extends React.Component {
render () {
  return (
    <div className="activity-card-container container">
      <div className="row">
        <div className="col-sm-8 col-md-8 col-lg-8">
          <div className="event-substance">
            <div className="event-activity">
              <strong>[ACTIVITY]</strong>
            </div>
            <div className="event-info">
              <p className="card-text">
              <ul>
                <li>[Date]</li>
                <li>[Location]</li>
                <li>[Family Friendly]</li>
                <li>[Description]<br/>lorus ipsum who carejawouidhawjfwlifugahli  ia hbfwiefb </li>
              </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4 user-creator-info">
            <div className="user-created">
              <strong>[USERNAME]</strong>
            </div>
            <div className="user-profile-picture">
              <img src="https://thumbs.dreamstime.com/b/little-female-pomeranian-pet-show-dog-22237703.jpg" className="user-profile-picture img-circle"></img>
            </div>
            <div className="user-flake-score">
              <strong>FLAKE SCORE [0.00]</strong>
            </div>
        </div>
      </div>
    </div>
  )
}
}

export default ActivityCard;