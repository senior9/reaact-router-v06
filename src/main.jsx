import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Jobs from './Components/Jobs/Jobs';
import JobsData from './Components/JobsData/JobsData';
import Home from './Components/Home/Home';
import JobDetails from './Components/JobDetails/JobDetails';
import Header from './Components/Header/Header';
import Chart from './Components/Chart/Statistics';
import Statistics from './Components/Chart/Statistics';
import AppliedJobs from './AppliedJobs/AppliedJobs';
import NotFound from './NotFound/NotFound';
import Blog from './Blog/Blog';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children:[
      {
        path: "/home",
        element: <JobsData />,
        loader: () => fetch("data.json")
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Failed to fetch data");
            }
          })
          .then(data => ({ jobsData: data })),
      }
    ],
    loader: () => fetch("data.json")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch data");
        }
      })
      .then(data => ({ jobsData: data })),
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "applied-jobs",
    element: <AppliedJobs />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "statistics",
    element: <Statistics />,
  },
  {
    path: "job-details/:jobId",
    element: <JobDetails />,
    loader: async ({ params }) => {
      const { jobId } = params;
      const res = await fetch("data.json");
      const text = await res.text();
      try {
        const data = JSON.parse(text);
        const job = data.jobs.find(
          (job_1) => parseInt(job_1.id) === parseInt(jobId)
        );
        return { data: job };
      } catch (error) {
        console.error("Error parsing JSON:", error);
        return { data: null };
      }
    },
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Outlet />
  </React.StrictMode>
)
