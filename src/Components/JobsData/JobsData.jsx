import React from "react";
import "./JobsData.css";
import { useLoaderData } from "react-router-dom";
import Jobs from "../Jobs/Jobs";

const JobsData = () => {
  const data = useLoaderData();
  const jobsData = data.jobsData.jobs;
//   console.log(jobsData)

// set State for See All Jobs Data

  return (
    <div className=" ">
      <h1 className="text-center text-5xl font-bold">Feature Jobs</h1>
      <p className="text-center leading-10">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <h1> data length: {jobsData?.length}</h1>
      <div className="container mx-auto grid grid-cols-2 gap-5 mt-10">
      {
        jobsData.map((job) => <Jobs
        key={job.id}
        job={job}
        ></Jobs>)
      }
      
      </div>
      <button className="button-one flex items-center justify-center mt-5 mx-auto"> See All Jobs</button>
    </div>
  );
};

export default JobsData;