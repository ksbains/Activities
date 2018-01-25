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

    componentWillMount() {
        axios.get('/user').then(response => {
            console.log(response.data);
            if (!!response.data.user) {
                console.log('THERE IS A USER')
                this.setState({
                    loggedIn: true,
                    user: response.data.user
                })
                // response.redirect('/')
            } else {
                this.setState({
                    loggedIn: false,
                    user: null
                })
                // response.redirect('/login');
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
             {/*<Route exact path='/' component={Homepage} />*/}
             <Route exact path='/' render={() => <Homepage user={this.state.user}/>} />
             <Route exact path='/activity' component={ActivityForm} />
             <Route exact path='/settings' component={Setting} />
             <Route exact path='/user' component={UserPage} />
             <Route exact path='/login' component={LoginPage} />
             <Route exact path='/event' component={EventPage} />
         </Switch>
     </div>
    </div>
   );
 }
}

export default App;
