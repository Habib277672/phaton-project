import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';


export default function ResetPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      alert('Reset code sent to your email!');
      console.log('Email submitted:', email);
    } else {
      alert('Please enter your email address');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col sm:flex-row justify-end items-start sm:items-center gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="text-sm sm:text-base text-gray-700">Don't have an account?</span>
          <Link to="/signup" className="px-4 cursor-pointer sm:px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition text-sm sm:text-base">
            Sign Up
          </Link>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="flex justify-center order-1 lg:order-1">
            <div className="relative w-full max-w-md">
              <img 
                src="/reset.png" 
                alt="Reset Password Illustration" 
                className="w-full h-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
            </div>
          </div>

          <div className="w-full max-w-md mx-auto lg:mx-0 order-2 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-blue-600 mb-3 sm:mb-4">
              Reset your password
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
              Enter your email and we'll send you a link to reset your password
            </p>

            <div className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-gray-900 font-medium mb-2 text-sm sm:text-base">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full cursor-pointer bg-gray-800 text-white py-3 sm:py-4 rounded-lg hover:bg-gray-900 transition font-medium mt-6 text-sm sm:text-base"
              >
                Send reset code
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}