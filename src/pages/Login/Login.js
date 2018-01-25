import React, { Component } from "react";
import "./Login.css";
import Navbar from "../../components/Navbar/Navbar.js";

// TODO: CHANGE LOOP LENGTH TO NUBER OF EVENTS IN DATABASE.
// USE .MAP HIGH FUNCTIONS

// Create a state to hold the list of cards (state.cards)
// Pass this state as a pop to a Card container

class Login extends Component {

    state = {
    };

    componentDidMount = () => {
        console.log("Load Homepage");
    };

    render() {
        return(
            <div>
                <Navbar/>
                <div className="container">
                <form id="signup" data-name="signup" method="post" action="/register" aria-hidden="false">
                    <legend>Sign Up</legend>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input id="signup-email" class="form-control" name="email" type="email" />
                    </div>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input class="form-control" name="username" type="text" />
                    </div>
                    <div class="form-group">
                        <label for="first">First name</label>
                        <input class="form-control" name="first" type="text" />
                    </div>
                    <div class="form-group">
                        <label for="last">Last name</label>
                        <input class="form-control" name="last" type="text" />
                    </div>
                    <div class="form-group">
                        <label for="phoneNumber">Phone Number</label>
                        <input class="form-control" name="phoneNumber" type="text" />
                    </div>
                    <div class="form-group">
                        <label for="bio">Bio</label>
                        <input class="form-control" name="bio" type="text" />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input class="form-control" name="password" type="password" />
                    </div>
                    <div class="form-group">
                        <input class="btn btn-default" type="reset" value="Reset" />
                        <input class="btn btn-secondary" type="submit" value="Sign Up" />
                    </div>
                </form>
                <form id="login" name="login" method="post" action="login" aria-hidden="true">
                    <legend>Log in</legend>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input id="login-username" class="form-control" name="username" type="text" />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input class="form-control" name="password" type="password" />
                    </div>
                    <div class="form-group">
                        <input class="btn btn-default" type="reset" value="Reset" />
                        <input class="btn btn-secondary" type="submit" value="Log In" />
                    </div>
                </form>
            </div>    
            </div>
        )
    }
}


export default Login;
