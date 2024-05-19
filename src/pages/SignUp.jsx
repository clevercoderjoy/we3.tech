// src/pages/SignUp.js
import { useState } from 'react';
import { signUp } from '../services/api';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try
    {
      await signUp(email, password);
      alert('Sign up successful!');
    } catch (error)
    {
      console.error('Error signing up:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        autoComplete="email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        autoComplete="new-password"
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;