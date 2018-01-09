import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import ActivityCard from "./components/ActivityCard";


import Homepage from "./pages/Homepage";



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
