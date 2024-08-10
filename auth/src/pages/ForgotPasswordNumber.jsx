import React, { useState } from 'react';
import solarPanelImg from '../assets/images/GoGreenSolarPanel.png';
import GoGreenLittlePines from '../assets/images/GoGreenLittlePines.png'
import GoGreenSmallerPines from '../assets/images/GoGreenSmallerPines.png'

const ForgotPasswordNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your API integration here
    if (phoneNumber === '') {
      setError('Phone number is required');
    } else {
      setError('');
      // Perform API call to verify the phone number
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex w-full h-full ">
        {/* Left Section with Background Color and Images */}
        <div className="hidden md:flex md:w-1/2 bg-[#066f64] relative items-center justify-center">
          <img src={solarPanelImg} alt="Solar Panel" className="absolute bottom-0 left-[285px] max-w-[350px] max-h-[700px] z-10" />
          <img src={GoGreenLittlePines} alt="Solar Panel" className="absolute bottom-0 left-[90px]  w-[205px]" />
          <img src={GoGreenSmallerPines} alt="Solar Panel" className="absolute bottom-0 left-[10px]  w-[115px]" />
          <img src={GoGreenSmallerPines} alt="Solar Panel" className="absolute bottom-0 left-[540px]  max-w-20 z-0" />
        </div>
        
        {/* Right Section with Form */}
        <div className="flex flex-col items-center justify-center w-full p-10 md:w-1/2 bg-white">
          <h1 className="text-2xl font-bold text-center text-teal-700">Forgotten Password</h1>
          <p className="mt-2 text-center text-gray-600">Input Phone Number</p>
          <form onSubmit={handleSubmit} className="w-full max-w-sm mt-6">
            <div className="mb-4 flex">
              <select className="w-1/4 px-4 py-2 text-lg border rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-600">
                <option value="+234">+234</option>
                {/* Add more country codes if necessary */}
              </select>
              <input
                type="text"
                placeholder="Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-3/4 px-4 py-2 text-lg border rounded-r-md focus:outline-none focus:ring-2 focus:ring-teal-600"
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
          <div className="mt-4 text-center text-gray-600">
            <span className="inline-block w-1/3 border-b"></span>
            <span className="px-2 text-sm">Or</span>
            <span className="inline-block w-1/3 border-b"></span>
          </div>
          <p className="mt-4 text-center text-sm text-teal-700">Use Email instead</p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordNumber;
