import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import ActivityCard from "./components/ActivityCard";


//import Homepage from "./pages/Homepage";
import ActivityForm from "./pages/Activity";



class App extends Component {
 render() {
   return (
     <div className="App">
  		<ActivityForm/>
     </div>
   );
 }
}

export default App;
