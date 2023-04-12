import React from "react";
import "./Jobs.css";
import { Link, useLoaderData } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCommentDollar } from '@fortawesome/free-solid-svg-icons'

const Jobs = ({job}) => {
    // console.log(job)
    // const {company_image,company_name,job_name,job_type,contact_info}=job;
  return (
    <div className="mt-20">

      <div className=" container mx-auto flex justify-between">
        <div className="jobs-card ">
          <div className="job-description m-10">
            <div className=" job-image leading-10 ">
              <img src={job?.company_image} alt="" />
              <h4 className="font-bold text-xl">{job?.job_details?.job_title}</h4>
              <h5>{job?.company_name}</h5>
              <div className="job-type flex gap-4">
                <button className=" text-violet-600  job-button">{job?.job_type[0]}</button>
                {
                    job?.job_type[1] && (<button className=" text-violet-600  job-button">{job?.job_type[1]}</button>)
                }

              </div>
              <div className="location-part flex gap-4 ">
                <p><FontAwesomeIcon icon={faLocationDot} /> {job?.contact_info?.address}</p>
                <p> <FontAwesomeIcon icon={faCommentDollar} flip="horizontal" /> Salary : {job?.job_details?.salary}</p>
              </div>
              <Link to={`/job-details/${job?.id}`}>
              <button className="details-button flex-grow-0">
                View Details
              </button>
              </Link>
              
            
            </div>
          </div>
        </div>
        
      </div>
      
      
    </div>
  );
};

export default Jobs;
