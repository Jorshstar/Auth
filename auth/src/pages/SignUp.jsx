import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/images/logo.png';
import backgroundPicture from '../assets/images/backgroundPicture.png'
// import googleIcon from '../assets/images/google.png';
// import appleIcon from '../assets/images/apple.png';
// import githubIcon from '../assets/images/github.png';
// import linkedinIcon from '../assets/images/linkedin.png';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    sex: 'Male',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    state: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    // try {
    //   const response = await fetch('http://localhost:8000/api/signup', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   const data = await response.json();

    //   if (response.ok) {
    //     // Handle successful sign-up (e.g., store token, redirect)
    //     console.log('Sign-up successful:', data);
    //   } else {
    //     // Handle error response from the backend
    //     setError(data.message || 'An error occurred during sign-up.');
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
        style={{ backgroundImage: `url(${backgroundPicture})` }}
      ></div>
      <div className="flex-1 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            {/* <img src={logo} alt="Logo" className="mx-auto mb-4" /> */}
            <h1 className="text-2xl font-bold text-teal-600">Sign Up</h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="text-red-500 text-center">{error}</div>}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-600"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-600"
              />
            </div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-600"
            />
            <div className="relative">
              <select
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-600"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-600"
            />
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-600"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                {/* Toggle password visibility icon */}
              </span>
            </div>
            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-600"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                {/* Toggle password visibility icon */}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="country"
                placeholder="Country"
                required
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-600"
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                required
                value={formData.state}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700"
            >
              Sign Up
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
            Already have an account?{' '}
            <Link to="/signin" className="text-teal-600 hover:underline">
              Sign In
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
