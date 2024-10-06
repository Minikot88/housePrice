import React, { useState } from 'react';

const featureNames = [
  'Median House Value',
  'Median Income',
  'Median Age',
  'Total Rooms',
  'Total Bedrooms',
  'Population',
  'Households',
  'Latitude',
  'Longitude',
  'Distance to Coast',
  'Distance to LA',
  'Distance to San Diego',
  'Distance to San Jose',
  'Distance to San Francisco'
];

function PredictHousePrices({ onPredict }) {
  const [features, setFeatures] = useState(Array(featureNames.length).fill(''));

  const handleInputChange = (index, value) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
  };

  const handlePredict = () => {
    // Here you would typically call a model or perform some computation
    const predictedPrice = Math.random() * 100000; // Replace with your prediction logic
    onPredict(predictedPrice);
  };

  return (
    <div>
      <h2>Enter Features to Predict House Price</h2>
      {features.map((feature, index) => (
        <div key={index}>
          <label>{featureNames[index]}: </label>
          <input
            type="number"
            value={feature}
            placeholder={featureNames[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        </div>
      ))}
      <button onClick={handlePredict}>Predict Price</button>
    </div>
  );
}

export default PredictHousePrices;
