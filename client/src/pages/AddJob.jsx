import React, { useEffect, useRef, useState, useContext } from 'react';
import Quill from 'quill';
import { JobCategories, JobLocations } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
  const { addJob } = useContext(AppContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('Nairobi');
  const [category, setCategory] = useState('Programming');
  const [level, setLevel] = useState('Beginner level');
  const [salary, setSalary] = useState('');

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  // Initialize Quill editor
  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: 'snow' });
    }
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const description = quillRef.current?.root.innerHTML || '';

    // ✅ Generate unique _id for routing and localStorage consistency
    const newJob = {
      _id: Date.now().toString(), // important: use _id (JobListing uses _id)
      title,
      location,
      category,
      level,
      salary,
      description,
      date: Date.now(),
      applicants: 0,
    };

    addJob(newJob); // Add to context (also updates localStorage if context is fixed)

    alert('✅ Job added successfully!');

    // Reset form fields
    setTitle('');
    setLocation('Nairobi');
    setCategory('Programming');
    setLevel('Beginner level');
    setSalary('');
    if (quillRef.current) quillRef.current.root.innerHTML = '';

    // Navigate to Manage Jobs page
    navigate('/dashboard/manage-jobs');
  };

  return (
    <form onSubmit={handleSubmit} className='container p-4 flex flex-col w-full items-start gap-3'>
      <div className='w-full'>
        <p className='mb-2'>Job Title</p>
        <input
          type='text'
          placeholder='Type here ...'
          onChange={e => setTitle(e.target.value)}
          value={title}
          required
          className='w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded'
        />
      </div>

      <div className='w-full max-w-lg'>
        <p className='my-2'>Job Description</p>
        <div ref={editorRef}></div>
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Job Category</p>
          <select onChange={e => setCategory(e.target.value)} value={category} className='border px-2 py-1'>
            {JobCategories.map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <p className='mb-2'>Location</p>
          <select onChange={e => setLocation(e.target.value)} value={location} className='border px-2 py-1'>
            {JobLocations.map((loc, i) => (
              <option key={i} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        <div>
          <p className='mb-2'>Job Level</p>
          <select onChange={e => setLevel(e.target.value)} value={level} className='border px-2 py-1'>
            <option value='Beginner level'>Beginner level</option>
            <option value='Intermediate level'>Intermediate level</option>
            <option value='Senior level'>Senior level</option>
          </select>
        </div>
      </div>

      <div>
        <p className='mb-2'>Salary</p>
        <input
          type='number'
          min={0}
          onChange={e => setSalary(e.target.value)}
          value={salary}
          placeholder='2500'
          className='border px-2 py-1'
        />
      </div>

      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white rounded'>
        ADD
      </button>
    </form>
  );
};

export default AddJob;