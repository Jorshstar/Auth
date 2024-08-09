import React, { useState } from 'react';
import forgotImage from '../../assets/images/forgotImage.png'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
     console.log('Email:', email);
    // try {
    //   // Validate email format (optional)
    //   if (!email.trim()) {
    //     // Handle case where email is empty
    //     console.log('Email is required');
    //     return;
    //   }
      
    //   // Example: Send email data to backend for password reset
    //   const response = await fetch('/api/resetPassword', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email }),
    //   });

    //   if (response.ok) {
    //     // Handle success scenario
    //     console.log('Password reset email sent successfully');
    //   } else {
    //     // Handle error scenario
    //     console.error('Failed to send password reset email');
    //   }
    // } catch (error) {
    //   console.error('Error sending request:', error);
    // }
    
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex-1 bg-cover bg-center" style={{ backgroundImage: `url(${forgotImage})`, height: '100%' }}>

      </div>
      <div className="flex-1 flex flex-col justify-center items-center p-8">
        <h1 className="text-2xl font-bold mb-4 text-teal-600">Forgotten Password</h1>
        <p className="text-lg mb-4 text-black">Input Email to receive reset password code</p>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            />
          </div>
          <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
            Confirm
          </button>
        </form>
        <div className="mt-4 text-center relative">
  <span className="block text-black relative z-10 mb-2">
    <span className="absolute left-1 w-12  h-0.5 bg-black top-1/2 transform -translate-y-1/2"></span>
    Or
    <span className="absolute right-0 w-12 h-0.5 bg-black top-1/2 transform -translate-y-1/2"></span>
  </span>
  <a href="1" className="text-black mt-4">Use Phone instead?</a>
</div>
      </div>
    </div>
  );
};

export default ForgotPassword;
