// IpoBarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const IpoBarChart = ({ data }) => {
  const labels = data.map((item) => item.symbol);
  const values = data.map((item) => item.shares);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Shares',
        data: values,
        backgroundColor: 'rgba(75, 192, 192, 0.7)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Symbols',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Shares',
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default IpoBarChart;
