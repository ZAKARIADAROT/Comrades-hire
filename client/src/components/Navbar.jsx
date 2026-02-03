import React from 'react'
import NewLogo from '../assets/NewLogo.png'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { openSignIn } = useClerk()
  const { user } = useUser()

  return (
    <div className="w-full px-6 py-4">
      <div className="relative flex items-center w-full">
        
        <div>
          {/* Logo */}
        <img src={NewLogo} alt="Logo" className="h-24 w-auto" />
        </div>
        

        {/* User or Login section */}
        {user ? (
          <div className="ml-auto flex items-center gap-4">
            <Link to="/applications" className="text-blue-600 text-sm font-medium">
              Applied Jobs
            </Link>
            <span className="text-gray-500">|</span>
            <span className="text-sm text-gray-700">
              Hi, {`${user.firstName} ${user.lastName}`}
            </span>
            <UserButton />
          </div>
        ) : (
          <div className="ml-auto flex items-center gap-4">
            <span className="text-sm text-gray-600">Recruiter Login</span>
            <button
              onClick={openSignIn}
              className="px-4 py-2 text-sm rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
            >
              Login
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default Navbar



