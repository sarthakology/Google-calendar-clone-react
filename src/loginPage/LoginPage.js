import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const submitData = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8083/login',
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.data.accessToken) {
        console.log('Login successful!');
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        navigate('/');
      } else {
        setMessage('This user does not exist');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('Error occurred while logging in. Please try again.');
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <img className="w-8 h-8 mr-2" src="https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_31_2x.png" alt="logo" />
          Google Calendar
        </Link>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Login to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submitData}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login
              </button>
              {message && <p className="text-sm text-red-600">{message}</p>}
              <p className="text-sm font-light text-gray-500">
                Don't have an account? <Link to="/register" className="font-medium text-primary-600 hover:underline">Sign up here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
