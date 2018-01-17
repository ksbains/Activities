import React from 'react';
import "./ActivityCard.css";

export class ActivityCardUserInfo extends React.Component {
  render() {
	return(
		  <div>
        <div className="user-creator-info col-sm-4 col-md-4 col-lg-4">
            <div className="user-created">
              <strong><a href="#" className="username"> {this.props.username}</a></strong>
            </div>
            <div className="user-profile-picture">
              <img src="https://thumbs.dreamstime.com/b/little-female-pomeranian-pet-show-dog-22237703.jpg" className="user-profile-picture img-circle"></img>
            </div>
            <div className="user-flake-score">
              <strong className="flakeScore"> {this.props.flakeScore} </strong>
            </div>
       	</div>
      </div>
		);
};
};
