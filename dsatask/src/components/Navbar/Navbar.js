import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" >
      <h1 className="navbar-brand">Navbar</h1>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          {props.isLoggedIn && (<Link to="/" className="nav-item nav-link">Home</Link>)}
          {props.isLoggedIn && (<Link to="/register" className="nav-item nav-link">Sign Out</Link>)}
          {!props.isLoggedIn && (<Link to="/login" className="nav-item nav-link">Login</Link>)}
          {!props.isLoggedIn && (<Link to="/signup" className="nav-item nav-link">SignIn</Link>)}
          {props.isLoggedIn && (<Link to="/upcomingContest" className="nav-item nav-link">Upcoming Contest</Link>)}
        </div>
      </div>
      <div className="dropdown-divider"></div>
    </nav>
  );
}

export default Navbar;
