import React from 'react';

const HomeContainer = () => {
    return (
        <div className=' mx-auto mt-5 container header-compo'>
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

export default HomeContainer;