import { useEffect } from "react";
import { createContext, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    
  const [searchFilter, setSearchFilter] = useState({
    title:'',
    location:''
  });

  const [isSearched, setIsSearched] = useState(false);

  const [jobs, setJobs] = useState([]);

  const [isRecruiterLoggedIn, setIsRecruiterLoggedIn] = useState(false);
  const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);

  // ✅ NEW: Applications state
  const [applications, setApplications] = useState([]);

  // ✅ NEW: Function to add application
  const addApplication = (application) => {
    setApplications(prev => [...prev, application]);
  };

  // Function to fetch Jobs
  const fetchJobs = async () => {
    setJobs(jobsData);
  };
  
  useEffect(() => {
    fetchJobs();
  }, []);

  const value = {
    setSearchFilter, searchFilter, 
    setIsSearched, isSearched,
    jobs, setJobs,
    setIsRecruiterLoggedIn, isRecruiterLoggedIn,
    showRecruiterLogin, setShowRecruiterLogin,

    // ✅ ADD THESE
    applications,
    addApplication
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};