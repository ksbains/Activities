import React, { Component } from "react";
import "./Setting.css";
import Navbar from "../../components/Navbar/Navbar.js";
import UserService from "../../providers/UserService.js";
import $ from 'jquery'; 

class Setting extends Component {
	state = {
	    first: "",
        last: "",
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        flakeScore: "0.01",
        bio: "",
        activitiesCreated: [],
        activitiesJoined: [],
        lastLogin: "",
        status: "test"
    }
    
	pushUser = (data) => {
		UserService.saveUser(data)
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
    //console.log("the state before push is ", this.state);
    this.setState({
	    first: $('#first').val(),
        last: $('#last').val(),
        username: $('#user').val(),
        email: $('#email').val(),
        password: $('#password').val(),
        phoneNumber: $('#phoneNumber').val(),
        flakeScore: "0.01",
        bio: $('#bio').val(),
        activitiesCreated: [],
        activitiesJoined: [],
        lastLogin: "",
        status: "test"
    });
    console.log("the state after the push is", this.state);
    this.pushUser(this.state);
  }
render() {
	return(
		<div>
			<Navbar user={this.state.username} />
			<div className="container">
			<div className="row">
				<div className="col-sm-2 m-auto text-center"></div>
				<div className="col-sm-8 m-auto text-center">
					<h2>Account Set-Up</h2>
					<div className="divider"></div>
					<h4>Set User details</h4>
				</div>
				<div className="col-sm-2 m-auto text-center"></div>
			</div>
			<form action="cards.html" className="contact-form mt-4">
			
				<div className="row formQuestion">
					<div className="col-md-12">
						<div className="text-left">
			      	<label for="first">First Name </label>
			      	<br/>
						<input 
							type="text" 
							className="form-control-custom mb-4" 
							id="first" 
							placeholder="John"
							name="first"
							value={this.state.firstName} 
							onChange={this.handleInputChange}
						/>
					</div>
					</div>
				</div>
				
				<div className="row formQuestion">
					<div className="col-md-12">
						<div className="text-left">
							<label for="last">Last Name:</label>
							<br/>
						<input 
							type="text" 
							className="form-control-custom mb-4" 
							id="last"
							name="last"
							placeholder="Smith"
							value={this.state.lastName} 
							onChange={this.handleInputChange}
						/>
					</div>
					</div>
				</div>
				
				<div className="row formQuestion">
					<div className="col-md-12">
						<div className="text-left">
							<label for="user">User Name:</label>
							<br/>
						<input 
							type="text" 
							className="form-control-custom mb-4" 
							id="user"
							name="username"
							placeholder="johnsmith10"
							value={this.state.username} 
							onChange={this.handleInputChange}
						/>
					</div>
					</div>
				</div>

				<div className="row formQuestion">
					<div className="col-md-12">
						<div className="text-left">
							<label for="email">E-mail:</label>
							<br/>
						<input 
							type="text" 
							className="form-control-custom mb-4" 
							id="email"
							name="email"
							placeholder="johnsmith10@gmail.com"
							value={this.state.email} 
							onChange={this.handleInputChange}

						/>
					</div>
					</div>
				</div>

				<div className="row formQuestion">
					<div className="col-md-12">
						<div className="text-left">
							<label for="password">Password:</label>
							<br/>
						<input 
							type="text" 
							className="form-control-custom mb-4" 
							id="password"
							name="password"
							value={this.state.password} 
							onChange={this.handleInputChange}
						/>
					</div>
					</div>
				</div>

				<div className="row formQuestion">
					<div className="col-md-12">
						<div className="text-left">
							<label for="phoneNumber">Phone Number:</label>
							<br/>
						<input 
							type="text" 
							className="form-control-custom mb-4" 
							id="phoneNumber"
							name="phoneNumber"
							placeholder="1234567890"
							value={this.state.phoneNumber} 
							onChange={this.handleInputChange}
						/>
					</div>
					</div>
				</div>

				<div className="row formQuestion">
					<div className="col-md-12">
						<div className="text-left">
							<label for="bio">Profile Bio:</label>
							<br/>
							<div className="input">
								<textarea 
									id="bio"
									name="bio"
									value={this.state.bio} 
									onChange={this.handleInputChange}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="row formQuestion">
					<div className="col-md-12 mt-5">
						<button onClick={this.handleFormSubmit} className="btn btn-success btn-lg mb-2 mr-2 ml-2 pill-btn">Set-up Account</button>
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


export default Setting;