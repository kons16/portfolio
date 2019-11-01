import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Top from './components/Top';
import Navbar from './components/Navbar';
import Experiment from './components/Experiment';
import Product from './components/Product';
import Skill from './components/Skill';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Top />
            <Navbar />
            <Route path='/Experiment' component={Experiment}/>
            <Route path='/Product' component={Product}/>
            <Route path='/Skill' component={Skill}/>
            <Route path='/About' component={About}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
