import React from 'react';
import './App.css';
import NavBar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages'

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path ='/' exact component = {Home} />
      </Switch>
    </Router>
  );
}

export default App;