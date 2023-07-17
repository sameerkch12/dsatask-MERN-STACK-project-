import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Navbar isLoggedIn={true}/>
      Home
      <Footer />
    </div>
  )
}
