import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { ProgressSteps, OrderSummary, RecommendationSection } from "./CheckoutCommon";

const CheckoutPayment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        </div>
      </div>

      <ProgressSteps currentStep={2} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        <div className="flex-1 bg-white shadow-sm rounded-lg p-6 border border-gray-400">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Cardholder Name</label>
              <input type="text" placeholder="John Doe" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-gray-800 focus:outline-none"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Card Number</label>
              <input type="text" placeholder="1234 5678 **** ****" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-gray-800 focus:outline-none"/>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                <input type="text" placeholder="MM/YY" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-gray-800 focus:outline-none"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">CVV</label>
                <input type="text" placeholder="***" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-gray-800 focus:outline-none"/>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-8 cursor-pointer hover:scale-110 transition-transform"/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8 cursor-pointer hover:scale-110 transition-transform"/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-8 cursor-pointer hover:scale-110 transition-transform"/>
            </div>
          </form>

          <div className="flex justify-between mt-8">
            <Link to="/cart/checkout-cartinfo" className="px-6 py-3 rounded-md bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition">
              ← Back to Information
            </Link>
            <Link to="/cart/checkout-confirmation" className="px-6 py-3 rounded-md bg-gray-800 text-white font-medium hover:bg-gray-700 transition">
              Continue to Confirmation →
            </Link>
          </div>
        </div>

        <div className="lg:hidden mb-6">
          <OrderSummary showButton={false} />
        </div>

        <div className="hidden lg:block lg:w-80 flex-shrink-0">
          <OrderSummary showButton={false} />
        </div>
      </div>
      <RecommendationSection currentSlide={currentSlide} />
      <Footer />
    </div>
  );
};

export default CheckoutPayment;