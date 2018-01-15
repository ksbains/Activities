import React, { Component } from "react";
import "./Activity.css";
import Navbar from "../../components/Navbar/Navbar.js";
import SimpleAutocomplete from "../../components/PlacesAutocomplete/PlacesAutocomplete";
import ActivityService from "../../providers/ActivityService.js";
import $ from 'jquery'; 
class ActivitySignUp extends Component {
	activityTypes = [
		"Basketball",
		"Beer Die",
		"Slosh Ball",
		"Spike Ball",
		"Soccer"
	];

	durationTypes = [
		"30 mins",
		"1 hour",
		"1 hour and 30 mins",
		"2 hours",
		"2 hour and 30 mins",
		"3 hours"
	];
	peopleTypes = [1,2,3,4,5,6,7,8,9];
	state = {
	    location: "UCSD",
	    time: "April 20, 2018",
	    duration: "1 hour",
	    activityType: "Super Bowl",
	    fam: true,
	    maxPeople: 2,
	    description: "bring snacks",
	    reoccuring: true
    }
    
    getActivityTypes = () => {
    	let opt = this.activityTypes.map(e => {
    		return '<option value="' + e + '">' + e + '</option>'; 
    	});
    	
    	let toReturn = opt[0];
		for (var i = 1; i < opt.length; i++) {
			toReturn = toReturn + opt[i];
		}
		console.log("toReturn", toReturn);
    	return toReturn;
    }


	pushActivities = (data) => {
		ActivityService.saveActivity(data)
			.then(res => {
				console.log("it has been pushed to the DB successfully", )
			}).catch(err => console.log(err));
	}

	handleInputChange = (event) => {
	    let value = event.target.value;
	    const name = event.target.name;
	    this.setState({
	      [name]: value
	    });
  	}

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("the state before push is ", this.state);
    this.setState({
    	//location: $('#location').val(),
	    time: $('#time').val(),
	    duration: $('#duration').val(),
	    activityType: $('#activity').val(),
	    fam: $('#fam').val(),
	    maxPeople: $('#maxPeople').val(),
	    description: $('#description').val(),
	    reoccuring: $('#reoccur').val()
    });
    console.log("the state after the push is", this.state);
    this.pushActivities(this.state);
  }
  

render() {
	return(
		<div>
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-sm-2 m-auto text-center"></div>
					<div className="col-sm-8 m-auto text-center">
						<h2>Create a Game</h2>
						<div className="divider"></div>
						<h4>Set game details</h4>
					</div>
					<div className="col-sm-2 m-auto text-center"></div>
				</div>
				<form action="cards.html" className="contact-form mt-4">					
					
					<div className="row formQuestion">
						<div className="col-md-12">
							<div className="form-group text-left">
							  <label for="activity">Activity Type:</label>
							  <select 
							  	className="form-control"
							  	id="activity"
							  	name="activityType"
							  	value={this.state.activityType} 
							  	onChange={this.handleInputChange}>  
							   { this.activityTypes.map(e => { return (
							   		<option value={e}>{e}</option>
							   	); })}
							  </select>
							</div>
						</div>
					</div>

					<div className="row formQuestion">
						<div className="col-md-12">
							<div className="form-group text-left">
								<label for="duration">Duration: [2hr MAX]</label>
							  <select	
							  	className="form-control"
							  	id="duration"
							  	name="duration"
							  	value={this.state.duration} 
							  	onChange={this.handleInputChange}>
							  	{ this.durationTypes.map(e => { return (
							   		<option value={e}>{e}</option>
							   	); })}
							  </select>
							</div>
						</div>
					</div>

					<div className="row formQuestion">
						<div className="col-md-12">
							<div className="form-group text-left">
								<label for="maxPeople">Max People:</label>
							  <select 
							  	className="form-control" 
							  	id="maxPeople"
							  	name="maxPeople"
							  	value={this.state.maxPeople} 
							  	onChange={this.handleInputChange}>
							    {
							    	this.peopleTypes.map(e => { 
							    		return (
							   				<option value={e}>{e}</option>
							   			)
							   		})
							   	}
							  </select>
							</div>
						</div>
					</div>

					<div className="row formQuestion">
						<div className="col-md-12">
							<div className="text-left">
								<label for="description">Description:</label>
								<br/>
								<div className="input">
									<textarea 
										name="description"
										onChange={this.handleInputChange}
										id="bio"
										value={this.state.description}
										onChange={this.handleInputChange}
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="row formQuestion">
						<div className="col-md-12">
							<div className="text-left">
								<label for="fam">Family Friendly</label>
								<br/>
								<p>Is this Activity family friendly?</p>
								<input type="radio" name="fam" value="value={this.state.fam}"/> Yes<br/>
								<input type="radio" name="fam" value="{!this.state.fam}"/> No<br/>
							</div>
						</div>
					</div>

					<div className="row formQuestion">
						<div className="col-md-12">
							<div className="text-left">
								<label for="reoccur">Reoccuring</label>
								<br/>
								<p>Is this Activity reoccuring?</p>
								<input type="radio" name="reoccur" value="{this.state.reoccuring}"/> Yes<br/>
								<input type="radio" name="reoccur" value="{!this.state.reoccuring}"/> No<br/>
							</div>
						</div>
					</div>

					<div className="row formQuestion">
						<div className="col-md-12">
							<div class="form-group">
				                <div className='input-group date' id='datetimepicker1'>
				                    <input type='text' className="form-control" />
				                    <span className="input-group-addon">
				                        <span className="glyphicon glyphicon-calendar"></span>
				                    </span>
				                </div>
			            	</div>
			            </div>
			        </div>
			        <script type="text/javascript">
			            $(function () {
			                $('#datetimepicker1').datetimepicker()
			            });
			        </script>
					
					<div className="row formQuestion">
						<div className="col-md-12">
							<div className="text-left">
								<label for="time">Time:</label>
								<br/>
							<input 
								type="text" 
								className="form-control-custom mb-4" 
								id="time"
								name="time"
								value={this.state.time}
								onChange={this.handleInputChange}
							/>
						</div>
						</div>
					</div>

					<div className="row formQuestion">
						<div className="col-md-12">
							<div className="text-left">
				      	<label for="location">Location:</label>
				      	<br/>
								<SimpleAutocomplete />
						</div>
						</div>
					</div>

					<div className="row formQuestion">
						<div className="col-md-12 mt-5">
							<button onClick={this.handleFormSubmit} className="btn btn-success btn-lg mb-2 mr-2 ml-2 pill-btn">Create a Game</button>
						</div> 
					</div>

				</form>
			</div>		
			<div>
				<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
		  		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js"></script>
			</div>
		</div>
	)}
};


export default ActivitySignUp;