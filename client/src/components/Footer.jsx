import React from 'react'
import { assets } from '../assets/assets'
import NewLogo from '../assets/NewLogo.png'

const Footer = () => {
  return (
    <div className='container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20 '>
      <img src={NewLogo} alt="Logo" className="h-24 w-auto" />

      <footer className="border-t border-gray-300 py-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 px-4">
          <footer className="border-t border-gray-300 py-4">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 px-4 font-sans">
              <span>© SmartCorders.dev | All rights reserved.</span>
              <span className="mt-2 sm:mt-0">Designed by SmartCorders</span>
            </div>
          </footer>
        </div>
      </footer>

      <div className='flex gap-2.5'>
        <img width={38} src={assets.facebook_icon} alt="" />
        <img width={38} src={assets.twitter_icon} alt="" />
        <img width={38} src={assets.instagram_icon} alt="" />
      </div>
    </div>
  )
}

export default Footer
