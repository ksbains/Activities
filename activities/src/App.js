import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ActivityCard from "./components/ActivityCard";
<<<<<<< HEAD
import EventDescription from "./components/EventDescription";
import GoogleMap from "./components/GoogleMap";
=======

// import Homepage from "./pages/Homepage";
// import ActivityForm from "./pages/Activity";
import Setting from "./pages/Setting";

>>>>>>> e982719b1648cb5924c9ef3c07d88097e949238e


class App extends Component {
 render() {
   return (
     <div className="App">
<<<<<<< HEAD
     <Navbar/>
     <ActivityCard/>
     <EventDescription/>
     <GoogleMap/>
    
=======
  		<Setting/>
>>>>>>> e982719b1648cb5924c9ef3c07d88097e949238e
     </div>
   );
 }
}




export default App;
