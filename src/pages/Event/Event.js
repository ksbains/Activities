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
            owner: {}
        };
    };

    componentWillMount = () => {
        console.log("Load EventPage")
        this.loadEvent(function() {
            console.log("EventObj: ", this.state.activity);
            this.loadCreator(function () {
            console.log("holy shit i am in call back hell", this.state.owner);
            });
        });

    };

    loadCreator = (cb) => {
        console.log("this value of the creator at this time is...", this.state.activity.creator);
        UserService.getUser(this.state.activity.creator)
            .then(res => {
                this.setState({owner: res.data}, cb);
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
                        username = {this.state.owner?this.state.owner.username:"private user"}
                        bio = {this.state.owner?this.state.owner.bio:"this is a private user, you can not get thier biodata"}
                        pic = {this.state.owner?this.state.owner.pic:"http://pocketnow.com/wp-content/uploads/2014/09/incognito-mode.jpg"}
                        flakeScore = {this.state.owner?this.state.owner.flakeScore:69}
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
