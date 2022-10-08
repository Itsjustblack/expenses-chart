import React, { useEffect } from "react";
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2"
// import { faker } from '@faker-js/faker';

let delayed;
const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: true,
      }
    },
    y: {
      beginAtZero: true,
        display: false
    }
  },
  plugins:{
    animation: {
      delay: 0.2
    },
    callbacks: {
        title : () => null,
        beforeBody: () => '$'
      },
    tooltip: {
      bodyAlign: 'left',
      boxWidth: 10,
      backgroundColor: 'rgb(56, 35, 20)',
      displayColors: false,
    },
    legend: {
      display: false,
    }
  }
};
  const bgColor = [
    "rgba(236, 119, 95)",
    "rgba(236, 119, 95)",
    "rgba(236, 119, 95)",
    "rgba(236, 119, 95)",
    "rgba(236, 119, 95)",
    "rgba(236, 119, 95)",
    "rgba(236, 119, 95)",
  ];

const BarChart = ({days, data: amounts}) => {
  const data = {
    labels: days,
    datasets: [
  {
    data: amounts,
    backgroundColor: bgColor,
    borderRadius: 3,
  }
],
};

  useEffect(() => {
    if(amounts){
      const max = amounts.indexOf(Math.max(...amounts));
      bgColor[max] = "hsl(186, 34%, 60%)";
      console.log(bgColor);
    }
  }, [amounts]);
    return(
            <Bar
            height={220}
            data={data}
            options={options}
            />
    )
}

export default BarChart;