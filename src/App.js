import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import ActivityForm from "./pages/Activity";
import Setting from "./pages/Setting";
import UserPage from "./pages/User";
import LoginPage from "./pages/Login";
import EventPage from "./pages/Event";
import axios from "axios";


class App extends Component {

    constructor() {
        super()
        this.state = {
            loggedIn: false,
            user: null
        }
    }

    componentDidMount() {
        axios.get('/user').then(response => {
            console.log("this is before the set State", response.data);
            if (response.data.user) {
                console.log('THERE IS A USER')
                this.setState({
                    loggedIn: true,
                    user: response.data.user
                }, function (){
                    console.log("this is call after the setState, going into render");
                    this.render();
                });
                // response.redirect('/')
            }
            console.log("this is the username within willmount of route", response.data.user);
        })
    }

    
     render() {
       return (
        <div>
         <div className="App">
         </div>
         <div>
             <Switch>
                 <Route exact path='/' render={() => <Homepage user={this.state.user}/>} />
                 <Route exact path='/activity' render={() => <ActivityForm user={this.state.user}/>} />
                 <Route exact path='/settings' render={() => <Setting user={this.state.user}/>} />
                 <Route exact path='/user' render={() => <UserPage user={this.state.user}/>} />
                 <Route exact path='/login' render={() => <LoginPage user={this.state.user}/>} />
                 <Route exact path='/event' render={() => <EventPage user={this.state.user}/>} />
             </Switch>
         </div>
        </div>
       );
     }
}

export default App;
