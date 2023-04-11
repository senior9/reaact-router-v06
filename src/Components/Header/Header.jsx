import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className=' mx-auto mt-5 container header-compo'>
            <div className=' flex justify-between items-center'>
            <h1 className=' text-5xl font-semibold'><span className=' text-blue-700'>Carrier</span> Hunt</h1>
            {/* header nav bar part */}
            <nav className='nav-link'>
                <Link  to="/statistics"><span className=' text-indigo-700 '>Statistics</span></Link >
                <Link  to="/applied-jobs">Applied Jobs</Link >
                <Link  to="/blog">Blog </Link >
            </nav>
            <button className='button'>Start Apply </button>
        </div>

        {/* Header Container part */}

        <div className='header-container mt-14 flex justify-between items-center'>
            <div className='dream-job'>
                <p className=' text-6xl font-semibold mt-3 '>One Step <br/> Closer To Your <br /> <span className=' text-violet-700'>Dream Job</span></p>
                <p className=' mt-3'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className='button-one mt-3'>Get Started</button>
            </div>
            <div className='image-part'>
                <img src="../../../src/assets/All Images//P3OLGJ1 copy 1.png" alt=""/>
            </div>
        </div>
        </div>
    );
};

export default Header;