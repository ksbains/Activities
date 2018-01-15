import React from 'react';
import "./ActivityCard.css";

export const ActivityCardUserInfo = props => {
	return(
		<div className="comp-wrap">
            <div className="user-created">
            <strong><a href="#" className="username"> {props.username}</a></strong>
            </div>
            <div className="user-profile-picture">
              <img src="https://thumbs.dreamstime.com/b/little-female-pomeranian-pet-show-dog-22237703.jpg" className="user-profile-picture img-circle"></img>
            </div>
            <div className="user-flake-score">
              <strong><a href="#" className="flakeScore"> {props.flakeScore}</a></strong>
            </div>
       	</div>
		)
}

export default ActivityCardUserInfo;