import React from 'react';
import './App.css';
import NavBar from './Components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Pages'

function App() {
  return (
    <Router>
      <NavBar></NavBar>
    </Router>
  );
}

export default App;