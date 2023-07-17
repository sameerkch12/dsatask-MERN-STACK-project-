import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" >
      <h1 className="navbar-brand">Navbar</h1>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <Link to="/home" className="nav-item nav-link">Home</Link>
          <Link to="/" className="nav-item nav-link">Sign Out</Link>
          <Link to="/upcomingContest" className="nav-item nav-link">Upcoming Contest</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
