import React from "react";
import "./ActivityCard.css";


// TODO: /* CHANGE THE CSS FOR THE HOVER EVENT in ActivityCard.CSS*/

class ActivityCard extends React.Component {
render () {
  return (
    <div
      className="activity-card-container container"
    >
      <div className="row">
        <div className="event-activity col-md-5 col-sm-5 col-lg-5">
        <strong>Horse Golf</strong>
        </div>
        <div className="user-created col-md-5 col-sm-5 col-lg-5">
        <span>Created By [USERNAME]</span>
        </div>
        <div className="profile-picture col-md-5 col-sm-5 col-lg-5">
        <img src="https://thumbs.dreamstime.com/b/little-female-pomeranian-pet-show-dog-22237703.jpg" className="profile-picture img-circle"></img>
        </div>
      </div>
      <div className="row">
        <div className="event-info col-md-12 col-sm-12 col-lg-12">
        <span>EVENT INFO LORUS IPSOM SHIGGY DIGGY LATIN</span>
        </div>
      </div>
    </div>

  )
}
}

export default ActivityCard;