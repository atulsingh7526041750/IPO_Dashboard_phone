// IpoPieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';

const IpoPieChart = ({ data }) => {
  const labels = data.map((item) => item.symbol);
  const values = data.map((item) => item.shares);

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default IpoPieChart;

