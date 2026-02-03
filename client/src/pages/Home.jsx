import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import JobListing from '../components/JobListing.jsx'
import AppDownload from '../components/AppDownload.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar stays at top */}
      <Navbar />

      {/* Hero section below Navbar */}
      <Hero />
      <JobListing />
      <AppDownload />
      <Footer />
    </div>
  )
}

export default Home

