import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div id="navbar-box">
          <Link to="/About" id="nav-link">About</Link>
          <Link to="/Skills" id="nav-link">Skills</Link>
          <Link to="/Works" id="nav-link">Works</Link>
          <Link to="/Intern" id="nav-link">Intern</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
