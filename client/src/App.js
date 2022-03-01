import React from 'react';
import './App.css';
import NavBar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages'
import About from './Pages/about';
import ContactUs from './Pages/contactUs';
import Learn from './Pages/learn';
import Student from './Pages/student';
import Gaming from './Pages/gaming';
import Education from './Pages/education';
import Build from './Pages/build';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path='/' exact component={Home} /> 
        <Route path='/about' component={About} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/learn' component={Learn} />
        <Route path='/student' component={Student} />
        <Route path='/gaming' component={Gaming} />
        <Route path='/education' component={Education} />
        <Route path='/build' component={Build} />
      </Switch>
    </Router>
  );
    
}

export default App
