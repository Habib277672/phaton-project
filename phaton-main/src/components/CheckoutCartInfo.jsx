import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { ProgressSteps, OrderSummary, RecommendationSection } from './CheckoutCommon';

const CheckoutCartInfo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        </div>
      </div>

      <ProgressSteps currentStep={1} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex flex-col">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-300 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h2>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <p className="text-xs text-gray-500 mb-2">We'll send your download link here</p>
              <input type="email" placeholder="Enter your email" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-gray-800 focus:outline-none"/>
            </div>

            <hr className="my-6" />

            <h2 className="text-lg font-semibold text-gray-900 mb-4">Billing Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="First Name" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-gray-800 focus:outline-none"/>
              <input type="text" placeholder="Postal Code" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-gray-800 focus:outline-none"/>
            </div>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-gray-800 focus:outline-none mb-6">
              <option>United States</option>
              <option>India</option>
              <option>Canada</option>
              <option>Australia</option>
            </select>

            <div className="flex justify-between">
              <Link to="/cart/checkout" className="px-6 py-3 rounded-md bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition">
                ← Back to Cart
              </Link>
            </div>
          </div>

          <div className="lg:hidden mb-6">
            <OrderSummary
              showButton={true}
              buttonText="Continue to Payment"
              buttonLink="/cart/checkout-payment"
            />
          </div>
        </div>

        <div className="hidden lg:block lg:w-80 flex-shrink-0">
          <OrderSummary
            showButton={true}
            buttonText="Continue to Payment"
            buttonLink="/cart/checkout-payment"
          />
        </div>
      </div>

      <RecommendationSection currentSlide={currentSlide} />

      <Footer />
    </div>
  );
};

export default CheckoutCartInfo;