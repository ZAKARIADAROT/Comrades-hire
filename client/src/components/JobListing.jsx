import React, { useContext } from 'react';
import { AppContext } from '../context/Appcontext';
import { assets, JobCategories, JobLocations } from '../assets/assets';
import JobCard from './JobCard.jsx';

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext);

  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-white px-4">
        {isSearched &&
          (searchFilter.title !== '' || searchFilter.location !== '') && (
            <div>
              <h3 className="font-medium text-lg mb-4">
                Current Search
              </h3>

              <div className="mb-4 text-gray-600 flex items-center flex-wrap">
                {searchFilter.title && (
                  <span className="inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">
                    {searchFilter.title}
                    <img
                      src={assets.cross_icon}
                      alt="remove title"
                      className="cursor-pointer"
                      onClick={() =>
                        setSearchFilter(prev => ({
                          ...prev,
                          title: ''
                        }))
                      }
                    />
                  </span>
                )}

                {searchFilter.location && (
                  <span className="ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded">
                    {searchFilter.location}
                    <img
                      src={assets.cross_icon}
                      alt="remove location"
                      className="cursor-pointer"
                      onClick={() =>
                        setSearchFilter(prev => ({
                          ...prev,
                          location: ''
                        }))
                      }
                    />
                  </span>
                )}
                {/* search filters  */}
                <div className="max-lg:hidden">
  <h4 className='font-medium text-lg py-4 pt-14'>Search by Categories</h4>
  <ul className='space-y-4 text-grey-600'>
    {JobCategories.map((category) => (
      <li className='flex gap-3 item-center' key={category}>
        <input className='scale-125' type="checkbox" value={category} />
        {category}
      </li>
    ))}
  </ul>
</div>

              </div>
               {/* location filter */}
                <div className="max-lg:hidden">
  <h4 className='font-medium text-lg py-4'>Search by Locations</h4>
  <ul className='space-y-4 text-grey-600'>
    {JobLocations.map((location) => (
      <li className='flex gap-3 item-center' key={location}>
        <input className='scale-125' type="checkbox" value={location} />
        {location}
      </li>
    ))}
  </ul>
</div>
            </div>
          )}
      </div>
        {/* Job Listings */}
        <section className='ml-4 w-full lg:w-3/4 text-grey-800 max-lg:px-4'>
            <h3
  id="job-list"
  className="text-4xl font-serif font-semibold tracking-tight text-gray-900 py-4"
>
  Latest Jobs
</h3>

            <p className='mb-8'>get your dream job from top companies</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
                {/* Job Cards */}
                { jobs.map((job, index) => (<JobCard job={job} key={index} />)) }

            </div>
        </section>
    </div>
  );
};

export default JobListing;



