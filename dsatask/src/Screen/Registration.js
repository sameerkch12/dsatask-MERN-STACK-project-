import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export default function Registration() {
  return (
    <div>
        <Navbar isLoggedIn={false}/>
        Register
        <Footer />
    </div>
  )
}
