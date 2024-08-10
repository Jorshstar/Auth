import React, { useState } from 'react';
// import logo from '../assets/images/logo.png';
import backgroundImage from '../assets/images/backgroundImage.png';
import { Link } from 'react-router-dom';
// import googleIcon from '../assets/images/google.png';
// import appleIcon from '../assets/images/apple.png';
// import githubIcon from '../assets/images/github.png';
// import linkedinIcon from '../assets/images/linkedin.png';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state

    // try {
    //   const response = await fetch('http://localhost:8000/api/signin', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   const data = await response.json();

    //   if (response.ok) {
    //     // Handle successful login (e.g., store token, redirect)
    //     console.log('Login successful:', data);
    //   } else {
    //     // Handle error response from the backend
    //     setError(data.message || 'An error occurred during sign-in.');
    //   }
    // } catch (error) {
    //   // Handle network or other errors
    //   setError('Network error: Unable to reach the server.');
    // }
  };

  return (
    <div className="flex h-screen">
      <div
        className="hidden md:block md:w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="flex-1 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            {/* <img src={logo} alt="Logo" className="mx-auto mb-4" /> */}
            <h1 className="text-2xl font-bold text-teal-600">Sign In</h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="text-red-500 text-center">{error}</div>}
            <div>
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-600"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700"
            >
              Sign In
            </button>
          </form>
          <div className="my-4 text-center text-gray-500">Or</div>
          {/* <div className="flex justify-center space-x-4 mb-4">
            <img src={appleIcon} alt="Apple" className="h-8 cursor-pointer" />
            <img src={googleIcon} alt="Google" className="h-8 cursor-pointer" />
            <img src={githubIcon} alt="GitHub" className="h-8 cursor-pointer" />
            <img src={linkedinIcon} alt="LinkedIn" className="h-8 cursor-pointer" />
          </div> */}
          {/* <div className="text-center text-gray-600">
            Don’t have an account?{' '}
            <Link to={"/signup"} className="text-teal-600 hover:underline">
              Sign Up
            </Link>
          </div>
          <div className="text-center text-teal-600 mt-4">
            <Link to="/forgot-password">Forgotten Password?</Link>
          </div> */}
          <div className="text-center flex gap-2 mt-5">
            <p>Don't have an account?</p>
            <Link to={"/sign-up"} className='text-teal-600 hover:underline'>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
