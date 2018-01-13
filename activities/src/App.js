import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ActivityCard from "./components/ActivityCard";
import EventDescription from "./components/EventDescription";
import GoogleMap from "./components/GoogleMap";
import Setting from "./pages/Setting";


class App extends Component {
 render() {
   return (
     <div className="App">
        <Navbar/>
        <ActivityCard/>
        <EventDescription/>
         <GoogleMap/>
  		 <Setting/>
     </div>
   );
 }
}




export default App;
