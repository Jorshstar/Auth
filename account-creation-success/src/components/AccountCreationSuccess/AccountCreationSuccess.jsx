import React, { useState } from 'react';
import accountCreated from '../../assets/images/accountCreated.png';

const AccountCreationSuccess = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      setIsPopupVisible(true);
      setErrorMessage('');
      setTimeout(() => {
        setIsPopupVisible(false);
      }, 3000); // Hides the popup after 3 seconds
    } else {
      setErrorMessage('Passwords do not match');
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row h-screen">
      <div
        className="flex-1"
        style={{
          backgroundImage: `url(${accountCreated})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
      </div>
      <div className={`flex-1 flex flex-col justify-center items-center p-8 ${isPopupVisible ? 'blur-md' : ''}`}>
        <h1 className="text-2xl font-bold mb-4 text-teal-600">Enter New Password</h1>
        <p className="text-lg mb-4 text-black">Enter and confirm your new password</p>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Input Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-600"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-600"
            />
          </div>
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
            Confirm
          </button>
        </form>
      </div>
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="text-white text-2xl font-bold">Account Successfully Created</div>
        </div>
      )}
    </div>
  );
};

export default AccountCreationSuccess;
