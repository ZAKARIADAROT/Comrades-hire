import React from 'react'
import { useContext, useRef} from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext';

const Hero = () => {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);

  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value
    });
    setIsSearched(true);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6 px-4">
      <div className="w-full max-w-5xl rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 px-8 py-7 text-center shadow-xl">
  
  <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
    Over 10,000+ Jobs to Apply
  </h2>

  <p className="text-blue-50 text-xs md:text-sm max-w-xl mx-auto">
    Discover thousands of job opportunities, connect with top recruiters,
    and take the next step in your career.
  </p>

  <div className="mt-6 bg-white/95 backdrop-blur rounded-lg overflow-hidden max-w-4xl mx-auto shadow-md">
    <div className="flex items-center px-4 py-3 gap-3">
      
      <img
        src={assets.search_icon}
        alt="Search Icon"
        className="w-4 opacity-60"
      />

      <input
        type="text"
        placeholder="Search for jobs, companies, keywords..."
        className="text-xs outline-none flex-1 text-gray-700 placeholder-gray-400"
        ref={titleRef}
      />

      <div className="h-5 w-px bg-gray-300" />

      <img
        src={assets.location_icon}
        alt="Location Icon"
        className="w-4 opacity-60"
      />

      <input
        type="text"
        placeholder="Location"
        className="text-xs outline-none w-28 text-gray-700 placeholder-gray-400"
        ref={locationRef}
      />

      <button
        onClick={onSearch}
        className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 transition-all duration-200 text-white px-5 py-2 rounded-md text-xs font-semibold whitespace-nowrap shadow"
      >
        Search
      </button>

    </div>
  </div>
</div>
      <div className="mt-5 w-full max-w-5xl mx-auto flex items-center justify-between px-10 py-3 bg-gray-50 shadow-sm">
  <p className="text-xs text-gray-500 whitespace-nowrap tx-bold text-black font-bold">
    Trusted by
  </p>

  <img src={assets.microsoft_logo} alt="" className="h-5 opacity-70 object-contain" />
  <img src={assets.walmart_logo} alt="" className="h-5 opacity-70 object-contain" />
  <img src={assets.accenture_logo} alt="" className="h-5 opacity-70 object-contain" />
  <img src={assets.samsung_logo} alt="" className="h-5 opacity-70 object-contain" />
  <img src={assets.amazon_logo} alt="" className="h-5 opacity-70 object-contain" />
  <img src={assets.adobe_logo} alt="" className="h-5 opacity-70 object-contain" />
</div>
      </div>
  )
}

export default Hero


