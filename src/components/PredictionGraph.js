import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function PredictionGraph({ predictions }) {
  const data = {
    labels: predictions.map((_, index) => `Prediction ${index + 1}`),
    datasets: [
      {
        label: 'House Price Predictions',
        data: predictions,
        fill: false,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Prediction Graph</h2>
      <Line data={data} options={options} />
    </div>
  );
}

export default PredictionGraph;
