import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import User from "../../components/User";
import EventDescription from "../../components/EventDescription";
//import { Comment, CommentBox, CommentForm, CommentList, Data } from "../../components/Chat";
import "./Event.css";
import GoogleMap from "../../components/GoogleMap";
import ActivityService from "../../providers/ActivityService.js";
export class EventPage extends Component {

    state = {
    	activity: {}
    };
    
    componentDidMount = () => {
		console.log("Load EventPage")
		this.loadEvent(function () {
            console.log("lemme see that good good",this.state.activity);
        });
	};

	loadEvent = (cb) => {
		 var str = window.location.search;
		 var id = str.substring(4 , str.length);
		 console.log("the id is", id);
		 //pass the id
		ActivityService.getActivity(id)
			.then(res => {
	          	console.log("the obj is", res.data);
	          	this.setState({
	          		activity: res.data
	          	}, cb);
	          	
			}).catch(err => console.log("error", err));
	};

    /*geocode = (addy, cb) =>{
        console.log("we in the geocode");
        return geocodeByAddress( addy)
          .then(results => getLatLng(results[0]))
          .then(latLng => {
            this.setState({
                long:latLng.lng,
                lat: latLng.lat
            }, cb);
          })
          .catch(error => console.error('Error', error));
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.geocode(this.state.address, function (){
            this.pushActivities(this.state);
        });
    }*/

    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"> 
                        <User/>
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
                        <EventDescription/>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default EventPage;
