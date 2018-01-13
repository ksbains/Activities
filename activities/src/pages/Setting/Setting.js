import React, { Component } from "react";
import "./Setting.css";
import Navbar from "../../components/Navbar/Navbar.js";

class Setting extends Component {
render() {
	return(
		<div>
			<Navbar />
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
				      	<label for="firstName">First Name </label>
				      	<br/>
							<input type="text" className="form-control-custom mb-4" id="firstName" placeholder="John"/>
						</div>
						</div>
					</div>
					
					<div className="row formQuestion">
						<div className="col-md-12">
							<div className="text-left">
								<label for="lastName">Last Name:</label>
								<br/>
							<input type="text" className="form-control-custom mb-4" id="lastName"/>
						</div>
						</div>
					</div>
					
					<div className="row formQuestion">
						<div className="col-md-12">
							<div className="text-left">
								<label for="userName">User Name:</label>
								<br/>
							<input type="text" className="form-control-custom mb-4" id="userName"/>
						</div>
						</div>
					</div>

					<div className="row formQuestion">
						<div className="col-md-12">
							<div className="text-left">
								<label for="email">E-mail:</label>
								<br/>
							<input type="text" className="form-control-custom mb-4" id="email"/>
						</div>
						</div>
					</div>

					<div className="row formQuestion">
						<div className="col-md-12">
							<div className="text-left">
								<label for="password">Password:</label>
								<br/>
							<input type="text" className="form-control-custom mb-4" id="password"/>
						</div>
						</div>
					</div>

					<div className="row formQuestion">
						<div className="col-md-12">
							<div className="text-left">
								<label for="phoneNumber">Phone Number:</label>
								<br/>
							<input type="text" className="form-control-custom mb-4" id="phoneNumber"/>
						</div>
						</div>
					</div>

					<div className="row formQuestion">
						<div className="col-md-12">
							<div className="text-left">
								<label for="bio">Profile Bio:</label>
								<br/>
								<div className="input">
									<textarea name="profileBio" id="bio"/>
								</div>
							</div>
						</div>
					</div>

					<div className="row formQuestion">
						<div className="col-md-12 mt-5">
							<button type="submit" className="btn btn-success btn-lg mb-2 mr-2 ml-2 pill-btn">Set-up Account</button>
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