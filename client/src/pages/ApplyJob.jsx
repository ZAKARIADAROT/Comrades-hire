import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import kconvert from "k-convert";
import moment from "moment";

const ApplyJob = () => {
  const { id } = useParams();
  const { jobs, addApplication } = useContext(AppContext);

  const [jobData, setJobData] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Load selected job
  useEffect(() => {
    if (jobs.length > 0) {
      const selectedJob = jobs.find((job) => job._id === id);
      setJobData(selectedJob || null);
    }
  }, [id, jobs]);

  // If job not found yet
  if (!jobData) return <Loading />;

  // Submit Handler
  const onSubmit = (data) => {
    addApplication({
      jobId: jobData._id,
      jobTitle: jobData.title,
      company: jobData.companyId?.name,
      location: jobData.location,
      name: data.name,
      email: data.email,
      phone: data.phone,
      coverLetter: data.coverLetter,
      resume: data.resume[0],
      photo: data.photo ? data.photo[0] : null,
      appliedAt: new Date(),
    });

    alert("Application submitted successfully!");
    reset();
    setShowForm(false);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col py-10 container px-4 2xl:px-20">
        <div className="bg-white text-black rounded-lg w-full p-8 shadow-md">
          
          {/* Job Header */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                className="h-24 bg-white rounded-lg p-4 border"
                src={assets.company_icon}
                alt=""
              />
              <div>
                <h1 className="text-3xl font-medium">
                  {jobData.title}
                </h1>

                <div className="flex flex-wrap gap-4 text-gray-600 mt-2">
                  <span className="flex items-center gap-1">
                    <img src={assets.suitcase_icon} alt="" />
                    {jobData.companyId?.name}
                  </span>

                  <span className="flex items-center gap-1">
                    <img src={assets.location_icon} alt="" />
                    {jobData.location}
                  </span>

                  <span className="flex items-center gap-1">
                    <img src={assets.person_icon} alt="" />
                    {jobData.level}
                  </span>

                  <span className="flex items-center gap-1">
                    <img src={assets.money_icon} alt="" />
                    CTC: {kconvert.convertTo(jobData.salary)}
                  </span>
                </div>
              </div>
            </div>

            <div className="text-end">
              <button
                onClick={() => setShowForm(true)}
                className="bg-blue-600 p-2.5 px-10 text-white rounded hover:bg-blue-700 transition"
              >
                Apply Now
              </button>

              <p className="mt-1 text-gray-600">
                Posted {moment(jobData.date).fromNow()}
              </p>
            </div>
          </div>

          {/* Job Description */}
          <div className="mt-10">
            <h2 className="font-bold text-2xl mb-4">
              Job Description
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: jobData.description }}
              className="rich-text"
            />
          </div>

          {/* Application Form */}
          {showForm && (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-10 bg-sky-50 p-6 rounded-lg flex flex-col gap-4 max-w-xl"
            >
              <h2 className="text-xl font-bold mb-4">
                Fill Your Details
              </h2>

              {/* Full Name */}
              <input
                {...register("name", {
                  required: "Full name is required",
                })}
                placeholder="Full Name"
                className="p-2 border rounded"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">
                  {errors.name.message}
                </p>
              )}

              {/* Email */}
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                })}
                placeholder="Email"
                className="p-2 border rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">
                  {errors.email.message}
                </p>
              )}

              {/* Phone */}
              <input
                {...register("phone")}
                placeholder="Phone Number"
                className="p-2 border rounded"
              />

              {/* Cover Letter */}
              <textarea
                {...register("coverLetter")}
                placeholder="Cover Letter"
                rows={4}
                className="p-2 border rounded"
              />

              {/* Resume Upload */}
              <input
                type="file"
                {...register("resume", {
                  required: "Resume is required",
                })}
                className="p-2 border rounded"
              />
              {errors.resume && (
                <p className="text-red-500 text-sm">
                  {errors.resume.message}
                </p>
              )}

              {/* Photo Upload */}
              <input
                type="file"
                {...register("photo")}
                className="p-2 border rounded"
              />

              <div className="flex gap-4 mt-2">
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-2.5 px-6 rounded hover:bg-blue-700 transition"
                >
                  Submit Application
                </button>

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-400 text-white p-2.5 px-6 rounded hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ApplyJob;