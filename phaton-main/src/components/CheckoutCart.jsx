import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { productData, ProgressSteps, OrderSummary, RecommendationSection } from "./CheckoutCommon";

const CheckoutCart = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span className="text-xl">🛒</span>
          <span>Cart</span>
          <span>/ Product details</span>
        </div>
      </div>

      <ProgressSteps currentStep={0} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex flex-col">
          <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <img
                src={productData.image}
                alt={productData.name}
                className="w-24 h-24 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{productData.name}</h3>
                <p className="text-sm text-gray-600">Format: {productData.format}</p>
                <p className="text-sm text-gray-600">File Size: {productData.fileSize}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">{productData.price}</p>
              </div>
            </div>
          </div>

          <div className="lg:hidden mb-6">
            <OrderSummary
              showButton={true}
              buttonText="Continue to Information"
              buttonLink="/cart/checkout-cartinfo"
            />
          </div>
        </div>

        <div className="hidden lg:block lg:w-80 flex-shrink-0">
          <OrderSummary
            showButton={true}
            buttonText="Continue to Information"
            buttonLink="/cart/checkout-cartinfo"
          />
        </div>
      </div>

      <RecommendationSection currentSlide={currentSlide} />

      <Footer />
    </div>
  );
};

export default CheckoutCart;