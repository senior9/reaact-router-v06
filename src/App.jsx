import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, useLoaderData } from 'react-router-dom'
import Header from './Components/Header/Header'
import Jobcategory from './Components/JobCategory/Jobcategory'
import Jobs from './Components/Jobs/Jobs'


function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Jobcategory></Jobcategory>
      <Jobs></Jobs>
      <Outlet></Outlet>
    </div>
  )
}

export default App
