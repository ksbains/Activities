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
            owner: null,
            user: this.props.user,
            attendance: [],
            retrieved: false
        };
    };

    componentDidMount = () => {
        console.log("Load EventPage")
        this.loadEvent(function() {
            this.setState({
                retrieved:false
            })
            console.log("EventObj: ", this.state.activity);
            console.log("the creatorId is...", this.state.activity.creator);
            this.loadCreator(this.state.activity.creator);
            this.attendance();
        });
        //this.state.activity?this.loadCreator(this.state.activity.creator):console.log("is has not yet loaded the creator");

    };

    loadCreator = (creator, cb) => {
        console.log("this value of the creator inside loadCreator is...", creator);
        UserService.getUser(creator)
            .then(res => {
                console.log("The value of the load creator is..", res.data);
                this.setState({owner: res.data}, cb);
            }).catch(err => console.log("USERSERVICE ERROR !!!!!!!", err));
    };

    loadCreator = (creator) => {
        UserService.getUser(creator)
            .then(res => {
                this.setState({owner: res.data});
            }).catch(err => console.log("error"));
    }

    loadEvent = (cb) => {
     var str = window.location.search;
     var id = str.substring(4, str.length);
     console.log('Event Str', str);
     ActivityService.getActivity(id)
         .then(res => {
             console.log("get activity response", res.data);
             this.setState({ activity: res.data}, cb);
         }).catch(err => console.log("ActivityService error", err));
    };


    handleRSVP = () => {
        ActivityService.pushUserToActivity(this.state.activity._id, { $push: {usersJoined: this.state.user._id}}).then(res => {
            console.log("successful push to users joined");
        }).catch(err => console.log(err));
    };

    attendance = () => {
        if(this.state.activity.usersJoined.length > 0) {
            console.log(this.state.activity.usersJoined);
            this.state.activity.usersJoined.map((users, index) => {
                UserService.getUser(users).then(res => {
                    console.log(res.data.username);
                    this.setState({attendance:[...this.state.attendance, res.data.username],
                                    retrieved: true});
                    console.log("rendering");
                    this.render();
                });
            })
        }
        else {
            console.log("no attendance, going to set state and render");
            this.setState({
                retrieved: true
            });
            this.render();
        };
    }

    render()
    {
        let button = null;
        let RSVPers = null;

        if(this.state.user) {
            button = <button onClick={this.handleRSVP}>RSVP</button>;
        } else {
            <h1>Log in to RSVP!</h1>
        };

        if(!this.state.retrieved) return <div></div>;
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
                            activityType={this.state.activity.activityType}
                            time={this.state.activity.time}
                            duration={this.state.activity.duration}
                            date={this.state.activity.date}
                            address={this.state.activity.address}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Attendance</h1>
                            {button}
                            {this.state.attendance.map((users, index) => {
                                return( <p>{users}</p> )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventPage;
