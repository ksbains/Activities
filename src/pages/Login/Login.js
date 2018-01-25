import React, { Component } from "react";
import "./Login.css";
import Navbar from "../../components/Navbar/Navbar.js";
import axios from "axios";

// TODO: CHANGE LOOP LENGTH TO NUBER OF EVENTS IN DATABASE.
// USE .MAP HIGH FUNCTIONS

// Create a state to hold the list of cards (state.cards)
// Pass this state as a pop to a Card container

class Login extends Component {

    state = {
        email: null,
        username: null,
        first: null,
        last: null,
        phoneNumber: null,
        bio: null,
        password: null
    };

    componentDidMount = () => {
        console.log("Load Login");
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleInputChange = (event) => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(e);
        console.log('Magic!');
        axios.post('/register', this.state).then(response => {
            console.log(response);
            console.log("this is before the set State", response.data);
            if (response.data.user) {
                console.log('THERE IS A USER');
                this.props.user = response.data.user;
                // this.setState({
                //     loggedIn: true,
                //     user: response.data.user
                // }, function (){
                //     console.log("this is call after the setState, going into render");
                //     this.render();
                // });
                // response.redirect('/')
            } 
            console.log("this is the username within willmount of route", response.data.user);
        })
    }

    render() {
        return(
            <div>
                <Navbar/>
                <div className="container">
                <form id="signup" data-name="signup" aria-hidden="false" onSubmit={this.handleSubmit}>
                    <legend>Sign Up</legend>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input id="signup-email" class="form-control" name="email" type="email" value={this.state.email} onChange={this.handleInputChange}/>
                    </div>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input class="form-control" name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
                    </div>
                    <div class="form-group">
                        <label for="first">First name</label>
                        <input class="form-control" name="first" type="text" value={this.state.first} onChange={this.handleInputChange}/>
                    </div>
                    <div class="form-group">
                        <label for="last">Last name</label>
                        <input class="form-control" name="last" type="text" value={this.state.last} onChange={this.handleInputChange}/>
                    </div>
                    <div class="form-group">
                        <label for="phoneNumber">Phone Number</label>
                        <input class="form-control" name="phoneNumber" type="text" value={this.state.phoneNumber} onChange={this.handleInputChange}/>
                    </div>
                    <div class="form-group">
                        <label for="bio">Bio</label>
                        <input class="form-control" name="bio" type="text" value={this.state.bio} onChange={this.handleInputChange}/>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input class="form-control" name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
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
