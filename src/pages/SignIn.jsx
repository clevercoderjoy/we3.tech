// src/pages/SignIn.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/user/userSlice';
import { signIn } from '../services/api';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try
    {
      const response = await signIn(email, password);
      dispatch(setUser({ user: response.data.user, token: response.data.token }));
    } catch (error)
    {
      setError('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center'>
      <input
        className='mt-8 border-black border-2 rounded px-4 py-2 font-bold'
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        autoComplete="email"
      />
      <input
        className='my-8 border-black border-2 rounded px-4 py-2 font-bold'
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        autoComplete="current-password"
      />
      <button className='border-black border-2 rounded px-4 py-2 font-bold' type="submit">Sign In</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default SignIn;