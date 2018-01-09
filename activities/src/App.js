import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ActivityCard from "./components/ActivityCard";
import EventDescription from "./components/EventDescription";
import GoogleMap from "./components/GoogleMap";


class App extends Component {
 render() {
   return (
     <div className="App">
     <Navbar/>
     <ActivityCard/>
     <EventDescription/>
     <GoogleMap/>
    
     </div>
   );
 }
}




export default App;
