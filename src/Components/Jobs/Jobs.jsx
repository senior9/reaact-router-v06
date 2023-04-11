import React from "react";
import "./Jobs.css";

const Jobs = () => {
  return (
    <div className="mt-20">
      <h1 className="text-center text-5xl font-bold">Feature Jobs</h1>
      <p className="text-center leading-10">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <div className=" container mx-auto flex justify-between mt-10">
        <div className="jobs-card ">
          <div className="job-description m-10">
            <div className=" leading-7 ">
              <img src="../../../src/assets/Logo/google-1-1 1-1.png" alt="" />
              <h4>Technical Database Engineer</h4>
              <h5>Google LLC</h5>
              <div className="job-type flex gap-4">
                <button className=" text-violet-600  job-button">Remote</button>
                <button className=" text-violet-600  job-button">
                  Full-Time
                </button>
              </div>
              <div className="location-part flex gap-4 ">
                <p> Dhaka, Bangladesh</p>
                <p> Salary : 100K - 150K</p>
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
