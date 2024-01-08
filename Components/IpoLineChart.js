// IpoLineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const IpoLineChart = ({ data }) => {
  const labels = data.map((item) => item.symbol);
  const values = data.map((item) => item.shares);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Shares',
        data: values,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 0.7)',
        borderWidth: 2,
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

  return <Line data={chartData} options={options} />;
};

export default IpoLineChart;
