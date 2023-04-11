import React from "react";
import "./Jobs.css";
import { useLoaderData } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCommentDollar } from '@fortawesome/free-solid-svg-icons'

const Jobs = ({job}) => {
    console.log(job)
    // const {company_image,company_name,job_name,job_type,contact_info}=job;
  return (
    <div className="mt-20">
      {/* <h1 className="text-center text-5xl font-bold">Feature Jobs</h1>
      <p className="text-center leading-10">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p> */}

      <div className=" container mx-auto flex justify-between mt-10">
        <div className="jobs-card ">
          <div className="job-description m-10">
            <div className=" job-image leading-7 ">
              <img src={job?.company_image} alt="" />
              <h4>{job?.job_name}</h4>
              <h5>{job?.company_name}</h5>
              <div className="job-type flex gap-4">
                <button className=" text-violet-600  job-button">{job?.job_type[0]}</button>
                {
                    job?.job_type[1] && (<button className=" text-violet-600  job-button">{job?.job_type[1]}</button>)
                }

                {/* {job?.job_type[1] && (
                <button className="text-violet-600 job-button">
                  {job?.job_type[1]}
                </button> */}

              </div>
              <div className="location-part flex gap-4 ">
                <p><FontAwesomeIcon icon={faLocationDot} /> {job?.contact_info?.address}</p>
                <p> <FontAwesomeIcon icon={faCommentDollar} flip="horizontal" /> Salary : {job?.job_details?.salary}</p>
              </div>
              <button className="details-button flex-grow-0">
                {" "}
                View Details
              </button>
            </div>
          </div>
        </div>
        
      </div>
      
      
    </div>
  );
};

export default Jobs;
