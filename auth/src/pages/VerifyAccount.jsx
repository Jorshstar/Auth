import React, { useState, useEffect } from "react";
import HandLock from '../assets/images/HandLock.png';  
import HandShow from '../assets/images/HandShow.png';

const VerifyAccount = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Section */}
      <div className="w-1/2 bg-emerald-700 flex items-center justify-center">
        <img
          src={HandLock}  
          alt="Lock and Key"
          className="h-[392px] mt-[352px] mb-[140px] w-[610px] object-contain gap-0"
        />
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="w-3/4">
          <h2 className="text-2xl font-bold text-center text-teal-700 mb-6">
            Verify Your Account
          </h2>

          <p className="text-center mb-4 text-gray-600">
            Input Email to verify your account
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Placeholder"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Verification Code
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter your code"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
                <button
                  type="button"
                  className="absolute right-2 top-2 text-gray-600 focus:outline-none"
                >
                  👁️
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500">
                Resend in{" "}
                <span className="text-teal-700">
                  {timer} sec
                </span>
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-700 text-white py-2 rounded hover:bg-teal-800 focus:outline-none"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;
