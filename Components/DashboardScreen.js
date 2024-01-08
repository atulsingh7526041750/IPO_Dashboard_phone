// DashboardScreen.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import IpoBarChart from './IpoBarChart';
// import IpoPieChart from './IpoPieChart';
// import IpoLineChart from './IpoLineChart';
import IpoTable from './IpoTable';

const DashboardScreen = () => {
  const [ipoData, setIpoData] = useState([]);
  const [currencyData, setCurrencyData] = useState([]);

  useEffect(() => {
    // Fetch IPO data
    axios
      .get('https://api.iex.cloud/v1/data/CORE/UPCOMING_IPOS/market?token=pk_6d0cee696bc34b0b97b1763fde47c8aa')
      .then((response) => setIpoData(response.data));

    // Fetch currency data
    axios
      .get('https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=pk_6d0cee696bc34b0b97b1763fde47c8aa')
      .then((response) => setCurrencyData(response.data));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>IPO Data</h2>
      <IpoTable data={ipoData}/>
      {/* <IpoBarChart data={ipoData} />
      <IpoPieChart data={ipoData} />
      <IpoLineChart data={ipoData} /> */}

      <h2>Currency Data</h2>
      <pre>{JSON.stringify(currencyData, null, 2)}</pre>
    </div>
  );
};

export default DashboardScreen;
