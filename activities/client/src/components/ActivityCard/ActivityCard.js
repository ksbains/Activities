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
          {props.children}
        </div>
        <div className="user-created col-md-5 col-sm-5 col-lg-5">
          {props.children}
        </div>
        <div className="profile-picture col-md-5 col-sm-5 col-lg-5">
          {props.children}
        </div>
      </div>
      <div className="row">
        <div className="event-info col-md-12 col-sm-12 col-lg-12">
          {props.children}
        </div>
      </div>

    </div>

  )
}


}


export default ActivityCard;
