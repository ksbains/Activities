import React, { Component } from "react";
import "./Activity.css";
import Navbar from "../../components/Navbar/Navbar.js";
import SimpleAutocomplete from "../../components/PlacesAutocomplete/PlacesAutocomplete";

// // TODO: CHANGE LOOP LENGTH TO NUBER OF EVENTS IN DATABASE. 
// // USE .MAP HIGH FUNCTIONS


// 	// Create a state to hold the list of cards (state.cards)
// 	// Pass this state as a pop to a Card container
// 	// FUNCTIONS
/*<script type="text/javascript">
	 $(function () {
			 $('#datetimepicker1').datetimepicker()
	});
	var placeSearch, autocomplete;

	function initAutocomplete() {
        // Create the autocomplete object, restricting the search to geographical
        // location types.
        autocomplete = new google.maps.places.Autocomplete(
        
        (document.getElementById('address')),
        {types: ['geocode']});

        // When the user selects an address from the dropdown, populate the address
        // fields in the form.
        autocomplete.addListener('place_changed', fillInAddress);
    }

    function fillInAddress() {
        // Get the place details from the autocomplete object.
        var place = autocomplete.getPlace()

        for (var component in componentForm) {
          document.getElementById(component).value = ''
          document.getElementById(component).disabled = false
    }

        // Get each component of the address from the place details
        // and fill the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
          var addressType = place.address_components[i].types[0];
          if (componentForm[addressType]) {
            var val = place.address_components[i][componentForm[addressType]];
            document.getElementById(addressType).value = val;
          }
        }
    }

      // Bias the autocomplete object to the user's geographical location,
      // as supplied by the browser's 'navigator.geolocation' object.
    function geolocate() {
	    if (navigator.geolocation) {
	      navigator.geolocation.getCurrentPosition(function(position) {
	        var geolocation = {
	          lat: position.coords.latitude,
	          lng: position.coords.longitude
	        };
	        var circle = new google.maps.Circle({
	          left: geolocation,
	          radius: position.coords.accuracy
	        });
	        autocomplete.setBounds(circle.getBounds());
	      });
	    }
}*/
	function date(){
		console.log("The date picker has been clicked");
		this.datetimepicker();
	}

class ActivitySignUp extends Component {
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
							<div className="text-left">
				      	<label for="location">Location:</label>
				      	<br/>
								<SimpleAutocomplete />
						</div>
						</div>
					</div>

					<div className="row formQuestion">
						<div className="col-md-12">
							<div class="form-group">
				                <div class='input-group date' id='datetimepicker1'>
				                    <input type='text' class="form-control" />
				                    <span class="input-group-addon">
				                        <span class="glyphicon glyphicon-calendar" onClick="date()"></span>
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
								<label for="activity">Activity Type:</label>
							  <select className="form-control" id="activity">
							    <option>Basketball</option>
							    <option>Beer Die</option>
							    <option>Slosh Ball</option>
							    <option>Spike Ball</option>
							    <option>Soccer</option>
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
									<textarea name="profileBio" id="bio"/>
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
								<input type="radio" name="family" value="true"/> Yes<br/>
								<input type="radio" name="family" value="false"/> No<br/>
							</div>
						</div>
					</div>

					<div className="row formQuestion">
						<div className="col-md-12">
							<div className="text-left">
								<label for="reoccur">Reoccuring</label>
								<br/>
								<p>Is this Activity reoccuring?</p>
								<input type="radio" name="reoccur" value="true"/> Yes<br/>
								<input type="radio" name="reoccur" value="false"/> No<br/>
							</div>
						</div>
					</div>

					<div className="row formQuestion">
						<div className="col-md-12 mt-5">
							<button type="submit" className="btn btn-success btn-lg mb-2 mr-2 ml-2 pill-btn">Create a Game</button>
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