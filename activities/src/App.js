import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ActivityCard from "./components/ActivityCard"
class App extends Component {
 render() {
   return (
     <div className="App">
     <Navbar/>
     <ActivityCard/>
     </div>
   );
 }
}

export default App;
