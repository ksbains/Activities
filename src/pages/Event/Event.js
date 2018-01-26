import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import User from "../../components/User";
import EventDescription from "../../components/EventDescription";
//import { Comment, CommentBox, CommentForm, CommentList, Data } from "../../components/Chat";
import "./Event.css";
import GoogleMap from "../../components/GoogleMap";
import ActivityService from "../../providers/ActivityService.js";



export class EventPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activity: [],
            user: this.props.user
        };
    };

    componentWillMount = () => {
        console.log("Load EventPage")
        this.loadEvent(function() {
            console.log("EventObj: ", this.state.activity);
        });
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
                <Navbar user={this.state.user}/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"> 
                        <User
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
