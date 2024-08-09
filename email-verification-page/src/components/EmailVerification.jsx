import React, { useState } from 'react';
import HandsRandomStuff from '../assets/images/HandsRandomStuff.png';
import ManWithCup from '../assets/images/ManWithCup.png';

const EmailVerification = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your API integration here
    if (code === '') {
      setError('Code is required');
    } else {
      setError('');
      // Perform API call to verify the code
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex w-full h-full bg-gray-50 ">
        {/* Left Section with Background Color and Images */}
        <div className="hidden md:flex md:w-1/2 bg-[#008080] relative items-center justify-center">
        <img src={HandsRandomStuff} alt="Sun" className="absolute max-w-[500px] max-h-[250px] top-[50px] left-[240px] gap-0" />
        <img src={ManWithCup} alt="Man" className="absolute w-[500px] max-h-[300px] top-[318px] left-[48px] gap-0" />
        </div>
        
        {/* Right Section with Form */}
        <div className="flex flex-col items-center justify-center w-full p-10 md:w-1/2 bg-white">
          <h1 className="text-2xl font-bold text-center text-teal-700">Email Verification</h1>
          <p className="mt-2 text-center text-gray-600">Check your Email inbox for verification code</p>
          <form onSubmit={handleSubmit} className="w-full max-w-sm mt-6">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Input Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full px-4 py-2 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
            {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 text-white bg-teal-600 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
