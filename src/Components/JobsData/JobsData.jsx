import React, { useState } from "react";
import "./JobsData.css";
import { useLoaderData } from "react-router-dom";
import Jobs from "../Jobs/Jobs";


const JobsData = () => {
  const data = useLoaderData();
  const jobsData = data.jobsData.jobs;
//   console.log(jobsData)


// set State for See All Jobs Data
const [seeAllJobs, setSeeAllJobs]= useState(false);
const handleShowAllJobs =()=>{
    setSeeAllJobs(true);
}
// SliceData 
const sliceData = seeAllJobs ? jobsData :jobsData.slice(0,4);
  return (
    <div className=" mt-10 ">
      <h1 className="text-center text-5xl font-bold">Feature Jobs</h1>
      <p className="text-center leading-10">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="container card-container mx-auto grid grid-cols-2 gap-5 mt-5">
      {
        sliceData.map((job) => <Jobs
        key={job.id}
        job={job}
        ></Jobs>
        )
      }
      </div>
      {!seeAllJobs && (
        <button
          className="button-one flex items-center justify-center mt-5 mx-auto"
          onClick={handleShowAllJobs}
        >
          See All Jobs
        </button>)}
    </div>
  );
};

export default JobsData;
