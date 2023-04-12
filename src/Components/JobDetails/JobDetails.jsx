import React from "react";
import "./JobDetails.css";
import Header from "../Header/Header";
import { useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDollar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { addToDb } from "../../Utilities/fakedb";

const JobDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    id,
    job_description,
    job_responsibilities,
    educational_requirements,
    experience,
    contact_info,
    job_details,
  } = data.data;

  const handleApplyNow = () => {
    addToDb(id);
    alert("Apply completed successfully")
  }
  return (
    <div className="body">
      <div className="job-details">
        <Header></Header>
        <div className="img-container">
          <img
            className="image-1"
            src="../../../src/assets/All Images/Vector.png"
            alt=""
          />
          <h2 className="font-bold text-center text-5xl  flex justify-center items-center mt-20">
            Job Details
          </h2>
          <img
            className="image-2"
            src="../../../src/assets/All Images/Vector-1.png"
            alt=""
          />
        </div>

        <div className=" mt-72  mx-auto  grid">
            <div className=" flex container mx-auto gap-9">
                    <div className="job-in-details">
                        <p className="mt-10">
                            <span className="font-bold text-lg">Job Description: </span>
                            {job_description}
                        </p>
                        <p className="mt-10">
                            <span className="font-bold text-lg">
                            Job Responsibilities:{" "}
                            </span>
                            {job_responsibilities}
                        </p>
                        <p className="mt-10">
                            <h4 className="font-bold text-lg">
                            Educational Requirements:{" "}
                            </h4>
                            {educational_requirements}
                        </p>
                        <p className="mt-10">
                            <h4 className="font-bold text-lg">Experiences: </h4>
                            {experience}
                        </p>
                    </div>
                <div className="job-info mt-10">
                        <div className="m-5 ">
                            <h3 className="font-bold text-lg">Job Details</h3>
                            <hr />
                            <p className="flex gap-2 mt-5">
                            <img src="../../../src/assets/Icons/Frame.png" alt="" />
                            <span className="font-bold text-lg">
                                Salary: {job_details?.salary}
                            </span>
                            </p>
                            <p className="flex gap-2 mt-5">
                            <img src="../../../src/assets/Icons/Frame-1.png" alt="" />
                            <span className="font-bold text-lg">
                                Job Title: {job_details?.job_title}
                            </span>
                            </p>
                        </div>
                        {/* contact info */}
                        <div className="m-5 ">
                            <h3 className="font-bold text-lg">Contact Information</h3>
                            <hr />
                            <p className="flex gap-2 mt-5">
                            <img src="../../../src/assets/Icons/Frame-2.png" alt="" />
                            <span className="font-bold text-lg">
                                Phone: {contact_info?.phone}
                            </span>
                            </p>
                            <p className="flex gap-2 mt-5">
                            <img src="../../../src/assets/Icons/Frame-3.png" alt="" />
                            <span className="font-bold text-lg">
                                Email: {contact_info?.emails[0]}
                            </span>
                            </p>
                            <p className="flex gap-2 mt-5">
                            <img  src="../../../src/assets/Icons/Frame-4.png" alt="" />
                            <span className="font-bold text-lg">
                                Adress: {contact_info?.address}
                            </span>
                            </p>
                        </div>
                            <button onClick={()=>handleApplyNow(id)} className="job-btn mt-24">Apply Now </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
