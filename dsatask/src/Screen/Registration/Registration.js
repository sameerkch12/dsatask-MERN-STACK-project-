import React from 'react'
import './Registration.css'
import { Link } from 'react-router-dom'

export default function Registration() {
  localStorage.setItem('loggedIn',false)
  return (
    <div>
      Register (---) 
      <Link to='/login'>Login</Link> (---)
      <Link to='/signup'>Sign Up</Link>
    </div>
  )
}

