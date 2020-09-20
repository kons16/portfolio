import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Top from './components/Top';
import Navbar from './components/Navbar';
import Intern from './components/Intern';
import Works from './components/Works';
import Skills from './components/Skills';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Top />
            <Navbar />
            <Route path='/Intern' component={Intern}/>
            <Route path='/Works' component={Works}/>
            <Route path='/Studying' component={Skills}/>
            <Route path='/About' component={About}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
