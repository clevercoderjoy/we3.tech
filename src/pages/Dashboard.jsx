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
        setData(response?.data?.data);
      } catch (error)
      {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, [token]);

  if (!data)
  {
    return <div className='font-bold text-2xl text-center'>Loading...</div>;
  }

  return (
    <div>
      <h1 className='font-bold text-4xl text-center my-4'>Dashboard</h1>
      <ul>
        {
          data?.map((user) => <li key={user.id} className='border-2 border-black my-4 rounded mx-2'>
            <div className='flex justify-between'>
              <div className='flex flex-col justify-center font-bold'>
                <span>First Name: {user.first_name}</span>
                <span>Last Name: {user.last_name}</span>
                <span>Email: {user.email}</span>
              </div>
              <div>
                <img className='h-32 w-32 rounded' src={user.avatar} alt="" />
              </div>
            </div>
          </li>)
        }
      </ul>
    </div>
  );
};

export default Dashboard;