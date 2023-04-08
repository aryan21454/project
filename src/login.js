import React, { useState } from 'react';
import axios from 'axios';

export const LoginPage =() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/login', { email, password });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={handleEmailChange} />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={handlePasswordChange} />

      <button type="submit">Log in</button>
    </form>
  );
}
