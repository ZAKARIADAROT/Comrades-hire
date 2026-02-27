import { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext.jsx";

const Hero = () => {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);

  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setIsSearched(true);
  };

  return (
    <div className="container 2xl:px-20 mx-auto my-10">
      
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-900 text-white py-16 text-center mx-2 rounded-2xl shadow-2xl">
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Over 10,000+ Jobs Waiting For You
        </h2>

        <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5 text-gray-300">
          Your next big career move starts right here. Discover top opportunities and take the first step toward your future.
        </p>

        {/* SEARCH BOX */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-xl text-gray-700 max-w-2xl px-4 py-2 mx-4 sm:mx-auto shadow-lg">

          {/* Job Title */}
          <div className="flex items-center w-full sm:w-auto mb-2 sm:mb-0">
            <img className="h-4 sm:h-5 opacity-70" src={assets.search_icon} alt="" />
            <input
              type="text"
              placeholder="Search for jobs"
              className="p-2 rounded outline-none w-full focus:ring-2 focus:ring-emerald-400 transition"
              ref={titleRef}
            />
          </div>

          {/* Location */}
          <div className="flex items-center w-full sm:w-auto mb-2 sm:mb-0">
            <img className="h-4 sm:h-5 opacity-70" src={assets.location_icon} alt="" />
            <input
              type="text"
              placeholder="Location"
              className="p-2 rounded outline-none w-full focus:ring-2 focus:ring-emerald-400 transition"
              ref={locationRef}
            />
          </div>

          {/* Button */}
          <button
            onClick={onSearch}
            className="bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 px-6 py-2 rounded-lg text-white font-medium shadow-md"
          >
            Search
          </button>
        </div>
      </div>

      {/* TRUSTED BY SECTION */}
      <div className="border border-gray-200 shadow-md bg-white mx-2 mt-6 p-6 rounded-xl">
        <div className="flex justify-center gap-10 lg:gap-16 flex-wrap items-center">
          <p className="font-semibold text-gray-600">Trusted by</p>
          <img className="h-6 opacity-70 hover:opacity-100 transition" src={assets.microsoft_logo} alt="" />
          <img className="h-6 opacity-70 hover:opacity-100 transition" src={assets.walmart_logo} alt="" />
          <img className="h-6 opacity-70 hover:opacity-100 transition" src={assets.accenture_logo} alt="" />
          <img className="h-6 opacity-70 hover:opacity-100 transition" src={assets.samsung_logo} alt="" />
          <img className="h-6 opacity-70 hover:opacity-100 transition" src={assets.amazon_logo} alt="" />
          <img className="h-6 opacity-70 hover:opacity-100 transition" src={assets.adobe_logo} alt="" />
        </div>
      </div>

    </div>
  );
};

export default Hero;