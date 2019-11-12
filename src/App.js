import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Top from './components/Top';
import Navbar from './components/Navbar';
import Experiences from './components/Experiences';
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
            <Route path='/Experiences' component={Experiences}/>
            <Route path='/Works' component={Works}/>
            <Route path='/Skills' component={Skills}/>
            <Route path='/About' component={About}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
