// src/pages/Dashboard.js
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchUserData } from '../services/api';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const getData = async () => {
      try
      {
        const response = await fetchUserData(token);
        setData(response.data);
      } catch (error)
      {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, [token]);

  if (!data)
  {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Dashboard;