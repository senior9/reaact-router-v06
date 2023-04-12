import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Jobcategory from "../JobCategory/Jobcategory";
import { Outlet } from "react-router-dom";
import JobsData from "../JobsData/JobsData";
import Jobs from "../Jobs/Jobs";
import HomeContainer from "./HomeContainer/HomeContainer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <HomeContainer></HomeContainer>
      <Outlet></Outlet>
      <JobsData></JobsData>
    </div>
  );
};

export default Home;
