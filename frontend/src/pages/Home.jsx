import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axios';

function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axiosInstance.get('/')
      .then((response) => setMessage(response.data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return <h1>{message || 'Loading...'}</h1>;
}

export default Home;
