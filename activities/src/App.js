import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Homepage from "./pages/Homepage";
import ActivityForm from "./pages/Activity";
import Setting from "./pages/Setting";
import UserPage from "./pages/User";
import LoginPage from "./pages/Login";



class App extends Component {
 render() {
   return (
       <div>
           <Switch>
               <Route exact path='/' component={Homepage} />
               <Route exact path='/activity' component={ActivityForm} />
               <Route exact path='/settings' component={Setting} />
               <Route exact path='/user' component={UserPage} />
               <Route exact path='/login' component={LoginPage} />
           </Switch>
       </div>
   );
 }
}

export default App;
