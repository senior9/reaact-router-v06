import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import "./AppliedJobs.css"

const AppliedJobs = () => {
    
    return (
        <div>
            <Header></Header>
            <div className="img-container">
          <img
            className="image-1"
            src="../../../src/assets/All Images/Vector.png"
            alt=""
          />
          <h2 className="font-bold text-center text-5xl  flex justify-center items-center mt-20">
            Applied Jobs
          </h2>
          <img
            className="image-2"
            src="../../../src/assets/All Images/Vector-1.png"
            alt=""
          />
        </div>
            <Outlet></Outlet>
            <div className='mt-72 applied-jobs'>
                <div>
                    <img src="" alt=""/>
                    <h2>Job  Name </h2>
                    <h3>Compnay   Name </h3>
                    <div className="job-type flex gap-4">
                <button className=" text-violet-600  job-button">{}</button>
                {/* {
                    job?.job_type[1] && (<button className=" text-violet-600  job-button">{job?.job_type[1]}</button>)
                } */}

              </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;