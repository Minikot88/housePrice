import React from 'react';
import Papa from 'papaparse';

function CsvUpload({ onCsvUpload }) {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          onCsvUpload(result.data);
        },
      });
    }
  };

  return (
    <div>
      <h2>Upload House Data CSV</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
    </div>
  );
}

export default CsvUpload;
