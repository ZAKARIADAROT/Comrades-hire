import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RecruiterLogin = () => {
  const [state, setState] = useState('Login') // 'Login' or 'Sign Up'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState(null)
  const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false)

  const { setShowRecruiterLogin } = useContext(AppContext)
  const navigate = useNavigate()

  // Handle form submission
  const onSubmitHandler = async (e) => {
    e.preventDefault()

    // -----------------------
    // Sign Up Step 1 → move to image
    // -----------------------
    if (state === 'Sign Up' && !isTextDataSubmitted) {
      if (!name || !email || !password) {
        alert('Please fill all fields')
        return
      }
      setIsTextDataSubmitted(true)
      return
    }

    // -----------------------
    // Sign Up Step 2 → Create Account
    // -----------------------
    if (state === 'Sign Up' && isTextDataSubmitted) {
      if (!image) {
        alert('Please upload a company logo.')
        return
      }

      // TODO: Add your signup API call here
      console.log('Creating recruiter account...')
      console.log({ name, email, password, image })

      // Reset form and go back to login
      setName('')
      setEmail('')
      setPassword('')
      setImage(null)
      setIsTextDataSubmitted(false)
      setState('Login')
      setShowRecruiterLogin(false)
      return
    }

    // -----------------------
    // Login Logic
    // -----------------------
    if (state === 'Login') {
      if (!email || !password) {
        alert('Please enter email and password')
        return
      }

      // TODO: Replace this with real login API call
      console.log('Logging in...')
      console.log({ email, password })

      // Example: close modal and navigate to dashboard
      setShowRecruiterLogin(false)
      setEmail('')
      setPassword('')
      navigate('/dashboard') // optional
    }
  }

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className='fixed inset-0 z-50 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <form
        onSubmit={onSubmitHandler}
        className='relative bg-white p-10 rounded-xl text-slate-500 w-[400px] shadow-lg'
      >
        {/* Header */}
        <h1 className='text-center text-2xl text-neutral-700 font-medium'>
          Recruiter {state}
        </h1>
        <p className='text-sm text-center mt-2'>
          Welcome back! Please sign in to continue
        </p>

        {/* Sign Up → Image Upload */}
        {state === 'Sign Up' && isTextDataSubmitted ? (
          <div className='flex justify-center my-10'>
            <label className='cursor-pointer' htmlFor='image'>
              <img
                className='w-24 h-24 object-cover rounded-full border'
                src={image ? URL.createObjectURL(image) : assets.upload_area}
                alt='Upload company logo'
              />
              <input
                onChange={(e) => setImage(e.target.files[0])}
                type='file'
                id='image'
                hidden
              />
            </label>
          </div>
        ) : (
          <>
            {/* Company Name (Sign Up only) */}
            {state !== 'Login' && (
              <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                <img src={assets.person_icon} alt='Company icon' />
                <input
                  className='outline-none text-sm w-full'
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type='text'
                  placeholder='Company name'
                  required
                />
              </div>
            )}

            {/* Email Input */}
            <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
              <img src={assets.email_icon} alt='Email icon' />
              <input
                className='outline-none text-sm w-full'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type='email'
                placeholder='Email'
                required
              />
            </div>

            {/* Password Input */}
            <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
              <img src={assets.lock_icon} alt='Password icon' />
              <input
                className='outline-none text-sm w-full'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type='password'
                placeholder='Password'
                required
              />
            </div>
          </>
        )}

        {/* Forgot Password */}
        {state === 'Login' && (
          <p className='text-sm text-blue-500 my-4 cursor-pointer'>
            Forgot Password?
          </p>
        )}

        {/* Submit Button */}
        <button
          type='submit'
          className='bg-blue-600 w-full text-white py-2 rounded-full mt-4 hover:bg-blue-700 transition'
        >
          {state === 'Login'
            ? 'Login'
            : isTextDataSubmitted
              ? 'Create Account'
              : 'Next'}
        </button>

        {/* Toggle Login / Sign Up */}
        {state === 'Login' ? (
          <p className='mt-5 text-center'>
            Don't have an account?{' '}
            <span
              className='text-blue-600 cursor-pointer'
              onClick={() => {
                setState('Sign Up')
                setIsTextDataSubmitted(false)
              }}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className='mt-5 text-center'>
            Already have an account?{' '}
            <span
              className='text-blue-600 cursor-pointer'
              onClick={() => {
                setState('Login')
                setIsTextDataSubmitted(false)
              }}
            >
              Login
            </span>
          </p>
        )}

        {/* Close modal */}
        <img
          onClick={() => setShowRecruiterLogin(false)}
          className='absolute top-5 right-5 cursor-pointer w-4'
          src={assets.cross_icon}
          alt='Close'
        />
      </form>
    </div>
  )
}

export default RecruiterLogin