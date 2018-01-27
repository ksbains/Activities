import React from "react";
import { Link } from "react-router-dom";
import { ActivityCardUserInfo, ActivityCardEventInfo, ActivityCardWrapper } from "../../components/ActivityCard";
import UserService from "../../providers/UserService.js";
import ActivityService from "../../providers/ActivityService.js";
import "./ActivityCard.css";

// TODO: CHANGE CSS FOR LINKS & LINKS HOVER ...ect

// TODO: USER ABLE TO CHOOSE BACKGROUND COLOR FOR .USER-CREATOR-INFO

// TODO: INCREASE FONT SIZE FLAKE SCORE NUMBER/DECREASE FONT SIZE "FLAKE SCORE" TEXT


export class ActivityCard extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            activity: {},
            user: this.props.user,
            owner: null
        };
    };

    componentWillMount = () => {
        console.log("Load ActivityCard")
        this.loadEvent(function() {
            console.log("EventObj: ", this.state.activity);
            console.log("the creatorId is...", this.state.activity.creator);
            this.loadCreator(this.state.activity.creator)
        });
        //this.state.activity?this.loadCreator(this.state.activity.creator):console.log("is has not yet loaded the creator");

    };

    loadCreator = (creator) => {
        console.log("this value of the creator inside loadCreator is...", creator);
        UserService.getUser(creator)
            .then(res => {
                this.setState({owner: res.data});
            }).catch(err => console.log("USERSERVICE ERROR !!!!!!!", err));
    };

    loadEvent = (cb) => {
     var id = this.props.activityId;
     ActivityService.getActivity(id)
         .then(res => {
             this.setState({ activity: res.data}, cb);
         }).catch(err => console.log("ActivityService error", err));
 };



  render() {
    const userLink = {
      linkOne: this.state.owner?this.state.owner._id:"",
      linkTwo: this.state.activity?this.state.activity._id:""
    }

    return(
    <div className="activity-card-area">
      <div className="activity-card-container container">
        <div className="row">
        <Link to={`/event?id=${userLink.linkTwo}`}>
          <ActivityCardEventInfo 
            activityType = {this.state.activity?this.state.activity.activityType:""}
            description = {this.state.activity?this.state.activity.description:""}
          />
        </Link>
        <Link to={`/user?id=${userLink.linkOne}`}>
          <ActivityCardUserInfo 
            username = {this.state.owner?this.state.owner.username:""}
            flakeScore = {this.state.owner?this.state.owner.flakeScore:""}
          />
        </Link>
        </div>
      </div>
    </div>
    )
  }
}

