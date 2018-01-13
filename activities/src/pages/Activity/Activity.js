import React, { Component } from "react";
import "./Activity.css";
import Navbar from "../../components/Navbar/Navbar.js";
import SimpleAutocomplete from "../../components/PlacesAutocomplete/PlacesAutocomplete";
import ActivityService from "../../providers/ActivityService.js";
class ActivitySignUp extends Component {

	activityTypes = [
		"Basketball",
		"Beer Die",
		"Slosh Ball",
		"Spike Ball",
		"Soccer"
	];

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

    getActivityTypes = function() {
    	let opt = this.activityTypes.map(e => {
    		return "<option value=" + e + ">" + e + "</option>"; 
    	});
    	console.log("the array before return is", opt);
    	return opt;
    }

	pushActivities = (data) => {
		ActivityService.saveActivity(data)
			.then(res => {
				console.log("it has been pushed to the DB successfully", )
			}).catch(err => console.log(err));
	};

	handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.pushActivities(this.state);
  };


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
							  <select className="form-control" id="activity" value={this.state.activityType}>
							    {this.getActivityTypes}
							  </select>
							</div>
						</div>
					</div>

					<div className="row formQuestion">
						<div className="col-md-12">
							<div className="form-group text-left">
								<label for="duration">Duration: [2hr MAX]</label>
							  <select className="form-control" id="duration">
							    <option>30 min</option>
							    <option>1 hr</option>
							    <option>1.5 hrs</option>
							    <option>2 hrs</option>
							  </select>
							</div>
						</div>
					</div>

					<div className="row formQuestion">
						<div className="col-md-12">
							<div className="form-group text-left">
								<label for="maxPeople">Max People:</label>
							  <select className="form-control" id="maxPeople">
							    <option>1</option>
							    <option>2</option>
							    <option>3</option>
							    <option>4</option>
							    <option>5</option>
							    <option>6</option>
							    <option>7</option>
							    <option>8</option>
							    <option>9</option>
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
										name="profileBio"
										id="bio"
										value={this.state.description}
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
								<input type="radio" name="family" value="value={this.state.fam}"/> Yes<br/>
								<input type="radio" name="family" value="{this.state.fam}"/> No<br/>
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
								<input type="radio" name="reoccur" value="{this.state.reoccuring}"/> No<br/>
							</div>
						</div>
					</div>

					<div className="row formQuestion">
						<div className="col-md-12">
							<div class="form-group">
				                <div class='input-group date' id='datetimepicker1'>
				                    <input type='text' class="form-control" />
				                    <span class="input-group-addon">
				                        <span class="glyphicon glyphicon-calendar"></span>
				                    </span>
				                </div>
			            	</div>
			            </div>
			        </div>
					
					<div className="row formQuestion">
						<div className="col-md-12">
							<div className="text-left">
								<label for="time">Time:</label>
								<br/>
							<input type="text" className="form-control-custom mb-4" id="time"/>
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