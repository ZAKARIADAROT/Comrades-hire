import { useEffect, createContext, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

  const [searchFilter, setSearchFilter] = useState({
    title: '',
    location: ''
  });

  const [isSearched, setIsSearched] = useState(false);

  const [jobs, setJobs] = useState([]);

  const [isRecruiterLoggedIn, setIsRecruiterLoggedIn] = useState(false);
  const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);

  const [applications, setApplications] = useState([]);

  // ✅ Load jobs (merge dummy + saved)
  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    
    // Merge dummy jobs with saved jobs, avoid duplicates
    const mergedJobs = [...jobsData];

    savedJobs.forEach(savedJob => {
      // Use title + location + date as simple uniqueness check
      if (!mergedJobs.some(job =>
        job.title === savedJob.title &&
        job.location === savedJob.location &&
        job.date === savedJob.date
      )) {
        mergedJobs.push(savedJob);
      }
    });

    setJobs(mergedJobs);
  }, []);

  // ✅ Save jobs to localStorage whenever jobs change
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  // ✅ Add a new job
  const addJob = (job) => {
    setJobs(prev => [...prev, job]);
  };

  // ✅ Add a new application
  const addApplication = (application) => {
    setApplications(prev => [...prev, application]);
  };

  const value = {
    setSearchFilter,
    searchFilter,
    setIsSearched,
    isSearched,
    jobs,
    setJobs,
    addJob,
    setIsRecruiterLoggedIn,
    isRecruiterLoggedIn,
    showRecruiterLogin,
    setShowRecruiterLogin,
    applications,
    addApplication
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};