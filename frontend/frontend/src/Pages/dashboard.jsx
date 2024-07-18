import React, { useEffect, useState } from 'react';
import { fetchData } from '../Services/api';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Data Visualization Dashboard</h1>
      <p>{{data}}</p>
    </div>
  );
};

export default Dashboard;
