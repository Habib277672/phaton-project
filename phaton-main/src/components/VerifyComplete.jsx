import React, { useState } from 'react';
import Footer from './Footer';

export default function VerifyComplete() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (!password || !confirmPassword) {
      alert('Please fill in both password fields');
      return;
    }
    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }

    alert('Password created successfully!');
    console.log('Password updated');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="flex justify-center order-1 lg:order-1">
            <div className="relative w-full max-w-md">
              <img 
                src="/verifycomplete.png" 
                alt="Verification Complete Illustration" 
                className="w-full h-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              
              <div className="w-full aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center p-8 hidden">
                <div className="text-center">
                  <div className="w-48 h-64 mx-auto bg-gray-800 rounded-xl shadow-2xl mb-6 flex flex-col items-center justify-center relative p-6">
                    <div className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">✓</span>
                    </div>
                    <div className="text-8xl mb-4">✓</div>
                    <div className="text-white text-sm font-semibold">CONFIRMED</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-md mx-auto lg:mx-0 order-2 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-3xl font-bold text-blue-600 mb-3 sm:mb-4">
              Verification complete
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-10">
              Your identity has been verified successfully
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-gray-900 font-semibold mb-2 text-sm sm:text-base">
                  Create new password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2 text-sm sm:text-base">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full cursor-pointer bg-white text-gray-800 py-3 sm:py-4 rounded-full border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition font-medium text-sm sm:text-base mt-8"
              >
                Continue to Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
       <Footer />
    </div>
  );
}