import React from 'react';
import { Link } from 'react-router-dom';
import "./ActivityCard.css";

export class ActivityCardUserInfo extends React.Component {
  constructor(props){
  super(props);
  this.username = props.username;
  this.flakeScore = props.flakeScore;
}
render() {
	return(
		  <div>
        <div 
        className="user-creator-info col-sm-4 col-md-4 col-lg-4"
        onClick={this.props.onClickExpandUserInfo}
        >
            <span><div className="user-created">
              <strong><a href="#" className="username"> {this.props.username} </a></strong>
            </div>
            <div className="user-profile-picture">
              <img src="https://thumbs.dreamstime.com/b/little-female-pomeranian-pet-show-dog-22237703.jpg" className="user-profile-picture img-circle" alt="user-prof-pic"></img>
            </div>
            <div  className="user-flake-score">
              <strong className="flakeScore"> [{this.props.flakeScore}] </strong>
            </div></span>
       	</div>
      </div>
		);
};
};
