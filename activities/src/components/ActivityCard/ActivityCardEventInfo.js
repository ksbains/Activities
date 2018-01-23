import React from 'react';
import { Link } from 'react-router-dom';
import "./ActivityCard.css";

export class ActivityCardEventInfo extends React.Component {
constructor(props){
  super(props);
}

  render() {
    return(
      <div>
        <div 
        className="event-created-info col-sm-8 col-md-8 col-lg-8">
            <div 
            className="event-activity"
            onClick={this.props.onClickFilterActivity}
            >
              <strong><a href="#"> {this.props.activityType} </a></strong>
            </div>
            <div 
            id={this.props._id}
            className="event-info"
            onClick={this.props.onClickExpandEventCard}
            >
            {/*<Link to={'/event?id=' + this.props.id}>*/}
              <p className="card-text">{this.props.description}</p>
            {/*</Link>*/}
            </div>
        </div>
      </div>
 
    );
};
};

