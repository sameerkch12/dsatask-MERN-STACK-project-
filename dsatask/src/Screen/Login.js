import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export default function Login() {
  return (
    <div>
      <Navbar isLoggedIn={false}/>
      Login
      <Footer />
    </div>
  )
}
