import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../features/user/userSlice';
import { signIn } from '../services/api';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try
    {
      const response = await signIn(email, password);
      dispatch(setUser({ user: response.data.user, token: response.data.token }));
      alert('Sign In successful!');
      navigate("/dashboard")
    } catch (error)
    {
      setError('Invalid email or password');
    }
  };

  return (
    <>
      <div className='border-2 border-black text-center my-4 rounded font-bold mx-4 px-2 py-4'>
        Note: The api provided for this assignment has been built in a way that only the users that are already registered in the database can sign in and sign up. So use the following credentials to get in. email: eve.holt@reqres.in password: cityslicka
      </div>
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
        <div className='flex mt-2 items-center gap-2'>
          <button className='border-black border-2 rounded px-4 py-2 font-bold' type="submit">Sign In</button>
          <button className='border-black border-2 rounded px-4 py-2 font-bold' type="submit">Sign Up</button>
        </div>
        {error && <p>{error}</p>}
      </form>
    </>
  );
};

export default SignIn;