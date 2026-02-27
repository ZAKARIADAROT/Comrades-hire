import React, { useState, useEffect } from 'react'
import { assets, viewApplicationsPageData } from '../assets/assets'

const ViewApplications = ({ applicants }) => {
  const [applications, setApplications] = useState([])

  useEffect(() => {
    if (applicants && applicants.length > 0) {
      setApplications(applicants)
    } else {
      setApplications(viewApplicationsPageData)
    }
  }, [applicants])

  // Function to update status of applicant
  const handleApplicationAction = (index, action) => {
    setApplications(prev => {
      const updated = [...prev]
      updated[index] = {
        ...updated[index],
        status: action // "Accepted" or "Rejected"
      }
      return updated
    })
  }

  return (
    <div className='container mx-auto p-4'>
      <div>
        <table className='w-full max-w-wxl bg-white border border-gray-200 max-sm:text-sm'>
          <thead>
            <tr className='border-b'>
              <th className='py-2 mx-4 text-left'>#</th>
              <th className='py-2 mx-4 text-left max-sm:hidden'>Applicant</th>
              <th className='py-2 mx-4 text-left max-sm:hidden'>Job Title</th>
              <th className='py-2 mx-4 text-left max-sm:hidden'>Location</th>
              <th className='py-2 mx-4 text-left'>Resume</th>
              <th className='py-2 mx-4 text-left'>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.length === 0 ? (
              <tr>
                <td colSpan='6' className='py-4 text-center text-gray-400'>
                  No applications yet.
                </td>
              </tr>
            ) : (
              applications.map((applicant, index) => (
                <tr key={index} className='text-gray-700'>
                  <td className='py-2 px-4 border-b text-center'>{index + 1}</td>
                  <td className='py-2 px-4 border-b flex items-center max-sm:hidden'>
                    <img
                      src={applicant.imgSrc}
                      alt={applicant.name}
                      className='w-10 h-10 rounded-full mr-3'
                    />
                    <span>{applicant.name}</span>
                  </td>
                  <td className='py-2 px-4 border-b max-sm:hidden'>{applicant.jobTitle}</td>
                  <td className='py-2 px-4 border-b max-sm:hidden'>{applicant.location}</td>
                  <td className='py-2 px-4 border-b'>
                    <a
                      href={applicant.resumeLink || '#'}
                      target='_blank'
                      className='bg-blue-500 text-white py-1 px-2 rounded inline-flex gap-2 items-center'
                    >
                      Resume <img src={assets.resume_download_icon} alt='' />
                    </a>
                  </td>
                  <td className='py-2 px-4 relative'>
                    {applicant.status ? (
                      <span
                        className={`font-semibold ${
                          applicant.status === 'Accepted'
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}
                      >
                        {applicant.status}
                      </span>
                    ) : (
                      <div className='flex gap-2'>
                        <button
                          className='px-2 py-1 bg-green-500 text-white rounded'
                          onClick={() => handleApplicationAction(index, 'Accepted')}
                        >
                          Accept
                        </button>
                        <button
                          className='px-2 py-1 bg-red-500 text-white rounded'
                          onClick={() => handleApplicationAction(index, 'Rejected')}
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewApplications