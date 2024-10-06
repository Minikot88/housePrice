import React, { useState } from 'react';
import CsvUpload from './components/CsvUpload';
import PredictHousePrices from './components/PredictHousePrices';
import PredictionGraph from './components/PredictionGraph';

function App() {
  const [houseData, setHouseData] = useState([]);
  const [predictions, setPredictions] = useState([]);

  const handleCsvUpload = (data) => {
    setHouseData(data);
    // Add your prediction logic here and update the predictions array.
  };

  const handlePrediction = (newPrediction) => {
    setPredictions((prevPredictions) => [...prevPredictions, newPrediction]);
  };

  return (
    <div className="App">
      <h1>House Price Prediction</h1>
      <CsvUpload onCsvUpload={handleCsvUpload} />
      <PredictHousePrices onPredict={handlePrediction} />
      <PredictionGraph predictions={predictions} />
    </div>
  );
}

export default App;
