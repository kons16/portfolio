import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Link to="/Skill">Skill</Link>,
        <Link to="/Product">Product</Link>,
        <Link to="/Experiment">Experiment</Link>,
        <Link to="/Research">Research</Link>
      </div>
    );
  }
}

export default Navbar;
