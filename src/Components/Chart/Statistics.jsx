import React from 'react';

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';



const Statistics = () => {
  ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
  );

  const labels = [
    'Assignment 01',
    'Assignment 02',
    'Assignment 03',
    'Assignment 04',
    'Assignment 05',
    'Assignment 06',
    'Assignment 07',
    'Assignment 08'
  ];
  const data = {
    labels,
    datasets: [
      {
        type: 'line',
        label: 'Assignment Marks',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false,
        data: [60, 58, 60, 55, 53, 60, 60, 60],
      },
      {
        type: 'bar',
        label: 'Assignment Marks',
        backgroundColor: 'rgb(75, 192, 192)',
        data: [60, 58, 60, 55, 53, 60, 60, 60],
        borderColor: 'white',
        borderWidth: 2,
      },
    ],
  };
  
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };
  return (
    <div className=' mt-14'>
      <h2>Assignment Marks Chart</h2>
      <Chart type='bar' data={data} options={options} />
    </div>
  );
};

export default Statistics;