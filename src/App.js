import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Top from './components/Top';
import Navbar from './components/Navbar';
import Experiment from './components/Experiment';
import Product from './components/Product';
import Skill from './components/Skill';
import Research from './components/Research';

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
            <Route path='/Research' component={Research}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
