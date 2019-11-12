import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div id="navbar-box">
          <Link to="/Skills" id="nav-link">Skills</Link>
          <Link to="/Works" id="nav-link">Works</Link>
          <Link to="/Experiences" id="nav-link">Experiences</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
