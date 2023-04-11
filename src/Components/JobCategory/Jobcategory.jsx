import React from 'react';
import "./JobCategory.css"

const Jobcategory = () => {
    return (
        <div className='  mt-20'>
                <div>
                <p className=' font-bold text-4xl  text-center'>Job Category List</p>
                <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className=' mt-10 container mx-auto flex items-center justify-between'>
                    {/* part 1 */}
                    <div className='jobs-category flex-col  my-auto justify-center'>
                      <div className='container-part'>
                      <div >
                      <img src="../../../src/assets/Icons/accounts 1.png" alt=""/>
                       <div >
                       <p  className='text-xl font-bold '>Account & Finance</p>
                        <p>300+ Jobs Available</p>
                      </div>
                       </div>
                      </div>
                    </div>
                    {/* part 2 */}
                    <div className='jobs-category flex-col  my-auto justify-center'>
                      <div className='container-part'>
                      <div >
                      <img src="../../../src/assets/Icons/business 1.png" alt=""/>
                       <div >
                       <p  className='text-xl font-bold '>Creative Design</p>
                        <p>100+ Jobs Available</p>
                      </div>
                       </div>
                      </div>
                    </div>
                    {/* part 3 */}
                    <div className='jobs-category flex-col  my-auto justify-center'>
                      <div className='container-part'>
                      <div >
                      <img src="../../../src/assets/Icons/social-media 1.png" alt=""/>
                       <div >
                       <p className='text-xl font-bold' >Marketing & Sales</p>
                        <p>150+ Jobs Available</p>
                      </div>
                       </div>
                      </div>
                    </div>
                    {/* part 4 */}
                    <div className='jobs-category flex-col  my-auto justify-center'>
                      <div className='container-part'>
                      <div >
                      <img src="../../../src/assets/Icons/chip 1.png" alt=""/>
                       <div >
                       <p  className='text-xl font-bold'>Engineering Job</p>
                        <p>224+ Jobs Available</p>
                      </div>
                       </div>
                      </div>
                    </div>
                </div>
        </div>
    );
};

export default Jobcategory;