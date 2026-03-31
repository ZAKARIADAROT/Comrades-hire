import React, { useContext } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const ManageJobs = () => {

  const { jobs } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className='container p-4 max-w-5xl'>

      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border border-gray-200'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b'>#</th>
              <th className='py-2 px-4 border-b'>Job Title</th>
              <th className='py-2 px-4 border-b'>Date</th>
              <th className='py-2 px-4 border-b'>Location</th>
              <th className='py-2 px-4 border-b'>Applicants</th>
            </tr>
          </thead>

          <tbody>
            {jobs.map((job, index) => (
              <tr key={job.id || index}>
                <td className='py-2 px-4 border-b'>{index + 1}</td>
                <td className='py-2 px-4 border-b'>{job.title}</td>
                <td className='py-2 px-4 border-b'>
                  {moment(job.date).format('ll')}
                </td>
                <td className='py-2 px-4 border-b'>{job.location}</td>
                <td className='py-2 px-4 border-b text-center'>
                  {job.applicants}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      <div className='mt-4 flex justify-end'>
        <button
          onClick={() => navigate('/dashboard/add-job')}
          className='bg-black text-white py-2 px-4 rounded'
        >
          Add New Job
        </button>
      </div>

    </div>
  );
};

export default ManageJobs;