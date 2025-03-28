import React, { useState } from 'react';
import axiosInstance from '../utils/axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/api/auth/login', { email, password });
      console.log('Logged in successfully:', response.data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} 
      placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
      placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
