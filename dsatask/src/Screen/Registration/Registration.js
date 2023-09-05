import React from 'react';
import './Registration.css';
import { Link } from 'react-router-dom';

export default function Registration() {
  localStorage.setItem('loggedIn', false);

  return (
    <div className="registration-container">
      <h2>Register</h2>
      <div className="buttons-container">
        <Link to='/login' className="button">Login</Link>
        <Link to='/signup' className="button">Sign Up</Link>
      </div>
    </div>
  );
}
