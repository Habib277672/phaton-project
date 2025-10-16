import React, { useState } from 'react';
import Footer from './Footer';

export default function VerifyEmail() {
  const [code, setCode] = useState(['', '', '', '', '', '']);

  const handleChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleVerify = () => {
    const verificationCode = code.join('');
    if (verificationCode.length === 6) {
      alert(`Verification code submitted: ${verificationCode}`);
      console.log('Code:', verificationCode);
    } else {
      alert('Please enter the complete 6-digit code');
    }
  };

  const handleResend = () => {
    alert('Verification code resent!');
    setCode(['', '', '', '', '', '']);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          <div className="flex justify-center order-1 lg:order-1">
            <div className="relative w-full max-w-md">
              <img 
                src="/verifyemail.png" 
                alt="Verify Email Illustration" 
                className="w-full h-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
            </div>
          </div>

          <div className="w-full max-w-md mx-auto lg:mx-0 order-2 lg:order-2">
            <div className="">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-600">
                Check your email
              </h2>
              
              <div>
                <p className="text-base sm:text-lg text-gray-700">
                  We've sent a 6-digit code to <br />
                  <span className="font-semibold">I****@gmail.com</span>
                </p>
              </div>

              <div className="space-y-6 mt-8">
                <div>
                  <label className="block text-gray-900 font-semibold mb-4 text-center text-sm sm:text-base">
                    Verification code
                  </label>
                  
                  <div className="flex justify-center gap-2 sm:gap-3 mb-6">
                    {code.map((digit, index) => (
                      <input
                        key={index}
                        id={`code-${index}`}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="w-10 h-10 sm:w-12 sm:h-12 text-center text-lg sm:text-xl font-semibold border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleVerify}
                  className="w-full cursor-pointer bg-white text-gray-800 py-3 sm:py-4 rounded-full border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition font-medium text-sm sm:text-base"
                >
                  Verify Code
                </button>

                <div className="text-center text-sm sm:text-base">
                  <span className="text-gray-600">Didn't receive the code? </span>
                  <button 
                    onClick={handleResend}
                    className="text-blue-600 cursor-pointer font-semibold hover:underline"
                  >
                    Resend code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}