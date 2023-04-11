import React from 'react';
import "./Home.css"
import Header from '../Header/Header';
import Jobcategory from '../JobCategory/Jobcategory';
import { Outlet } from 'react-router-dom';
import JobsData from '../JobsData/JobsData';
import Jobs from '../Jobs/Jobs';

const Home = () => {
    return (
        <div>
       <Header></Header>
       <Outlet></Outlet>
      <Jobcategory></Jobcategory>
      <JobsData></JobsData>
      <Jobs></Jobs>
        </div>
    );
};

export default Home;