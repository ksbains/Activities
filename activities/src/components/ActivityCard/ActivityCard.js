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
        <div className="event-activity col-md-4 col-sm-4 col-lg-4">
        <strong>Horse Golf</strong>
        </div>
        <div className="user-created col-md-4 col-sm-4 col-lg-4">
        <span>[USERNAME]</span>
        </div>
        <div className="profile-picture col-md-4 col-sm-4 col-lg-4">
        <img src="https://thumbs.dreamstime.com/b/little-female-pomeranian-pet-show-dog-22237703.jpg" className="profile-picture img-circle waves-effect waves-light"></img>
        </div>
      </div>
      <div className="row">
        <div className="event-info col-md-12 col-sm-12 col-lg-12">
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phallus condimentum, sem non tincidunt suscipit, tortor sapien sodales magna, eget varius felis sem at ante. Sed ut mollis nisi, nec ultrices enim. Morbi sit amet ullamcorper.</span>
        </div>
      </div>
    </div>

  )
}
}

export default ActivityCard;