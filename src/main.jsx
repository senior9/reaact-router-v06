import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Jobs from './Components/Jobs/Jobs';
import JobsData from './Components/JobsData/JobsData';
import Home from './Components/Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    loader : ()=> fetch("data.json") // Fetch the data from data.json
    .then(response => response.json()) // Parse the response as JSON
    .then(data => ({ jobsData: data })) // Return the data as an object with the key 'jobsData'
  },
  {
    path: "jobs-detail",
    element: <Jobs></Jobs>,
    
  }, 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
