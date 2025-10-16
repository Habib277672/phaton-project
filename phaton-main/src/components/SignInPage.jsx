import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <div className="flex-grow flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 lg:px-20 py-10 md:py-16">
        {/* Illustration */}
        <div className="flex-1 flex justify-center mb-10 md:mb-0">
          <img
            src="/signin.png"
            alt="Sign in illustration"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg object-cover drop-shadow-xl hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>

        {/* Sign In Form */}
        <div className="flex-1 max-w-md w-full flex flex-col">
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            {/* Sign Up Redirect */}
            <div className="flex justify-end mb-6">
              <span className="text-sm sm:text-base text-gray-700 mr-2">
                Don’t have an account?
              </span>
              <Link to="/signup">
                <button className="px-5 py-2 cursor-pointer border border-blue-700 rounded-full text-blue-700 font-semibold hover:bg-blue-50 active:scale-95 transition-transform duration-200">
                  SIGN UP
                </button>
              </Link>
            </div>

            {/* Heading */}
            <h1 className="text-blue-700 text-3xl sm:text-4xl font-bold mb-2">
              Welcome to Phaton!
            </h1>
            <h2 className="text-gray-800 text-base sm:text-lg font-medium mb-8">
              Sign In to your account
            </h2>

            {/* Email Input */}
            <div className="mb-5">
              <label className="block mb-1 text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all placeholder-gray-400 shadow-sm"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label className="block mb-1 text-gray-700 font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all placeholder-gray-400 shadow-sm"
              />
            </div>

            {/* Sign In Button */}
            <button className="w-full cursor-pointer py-3 rounded-full bg-blue-700 text-white font-medium text-lg shadow-md hover:bg-blue-800 active:scale-95 transition-transform duration-200 mb-6">
              Sign In
            </button>

            {/* Divider */}
            <div className="relative flex items-center justify-center mb-6">
              <div className="w-full h-px bg-gray-300"></div>
              <span className="absolute bg-white px-3 text-gray-500 text-sm">
                or continue with
              </span>
            </div>

            {/* Google Sign In */}
            <div className="flex justify-center">
              <button className="w-11 h-11 cursor-pointer rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-100 shadow-sm active:scale-95 transition-all">
                <FcGoogle className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignInPage;
