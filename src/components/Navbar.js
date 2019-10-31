import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Link to="/Skill" id="nav-link">Skill</Link>
        <Link to="/Product" id="nav-link">Product</Link>
        <Link to="/Experiment" id="nav-link">Experiment</Link>
        <Link to="/Research" id="nav-link">Research</Link>
      </div>
    );
  }
}

export default Navbar;
