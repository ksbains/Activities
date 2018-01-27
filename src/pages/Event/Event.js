import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import User from "../../components/User";
import EventDescription from "../../components/EventDescription";
//import { Comment, CommentBox, CommentForm, CommentList, Data } from "../../components/Chat";
import "./Event.css";
import GoogleMap from "../../components/GoogleMap";
import ActivityService from "../../providers/ActivityService.js";
import UserService from "../../providers/UserService.js";



export class EventPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activity: {},
            user: this.props.user,
            owner: null
        };
    };

    componentWillMount = () => {
        console.log("Load EventPage")
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
                console.log('load Creator res: ', res.data);
                this.setState({owner: res.data});
            }).catch(err => console.log("USERSERVICE ERROR !!!!!!!", err));
    };

    loadEvent = (cb) => {
     var str = window.location.search;
     var id = str.substring(4, str.length);
     console.log('Event Str', str);
     ActivityService.getActivity(id)
         .then(res => {
             this.setState({ activity: res.data}, cb);
         }).catch(err => console.log("ActivityService error", err));
 };
    render() {
        return (
            <div>
                <div className="container">
                    <Navbar user={this.state.user}/>
                    <div className="row">
                        <div className="col-md-12"> 
                        <User
                        username = {this.state.owner?this.state.owner.username:""}
                        bio = {this.state.owner?this.state.owner.bio:""}
                        pic = {this.state.owner?this.state.owner.pic:""}
                        flakeScore = {this.state.owner?this.state.owner.flakeScore:""}
                        />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12"> 
                        <GoogleMap 
                            lat={this.state.activity.lat}
                            lng={this.state.activity.long}/>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-12">
                            <EventDescription
                            description={this.state.activity.description}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventPage;
