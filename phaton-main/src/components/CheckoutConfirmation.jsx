import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { ProgressSteps, OrderSummary, RecommendationSection } from "./CheckoutCommon";

const CheckoutConfirmation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        </div>
      </div>
      <ProgressSteps currentStep={3} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 mt-10 mb-10">
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white shadow-lg rounded-lg p-8 text-center w-full border border-gray-300">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 rounded-full p-4">
                <span className="text-green-600 text-4xl">✔</span>
              </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Order Complete!</h2>
            <p className="text-gray-600 mb-6">Thank you for your purchase. Your digital download is ready!</p>
            <div className="bg-gray-50 border rounded-lg p-6 mb-6 text-left">
              <h3 className="text-center text-gray-800 font-medium mb-4">Order Details</h3>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-semibold text-gray-900">#DH-2024-0001</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Email:</span>
                <span className="font-semibold text-gray-900">john@example.com</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Total Paid:</span>
                <span className="font-semibold text-gray-900">$21</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-6">A confirmation email with download instructions has been sent to your email address.</p>
            <Link
              to="/cart/checkout-payment"
              className="inline-block mt-4 w-48 bg-gray-800 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              ← Back to Payment
            </Link>
          </div>
        </div>

        <div className="lg:w-80 w-full">
          <OrderSummary showButton={false} />
        </div>
      </div>
      <RecommendationSection currentSlide={currentSlide} />
      <Footer />
    </div>
  );
};

export default CheckoutConfirmation;