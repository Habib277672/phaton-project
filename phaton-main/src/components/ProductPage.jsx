import React, { useState } from "react";
import { FaTrash, FaRegHeart, FaUser } from "react-icons/fa";
import { getProducts } from "../services/productService";
import Footer from "./Footer";

export default function ProductPage() {
  const [products, setProducts] = useState(getProducts());

  const increaseQty = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
    );
  };

  const decreaseQty = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <>
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 text-transparent bg-clip-text">
            Saved Products
          </h2>
          <div className="flex items-center gap-6 text-xl text-gray-700">
            <FaRegHeart className="cursor-pointer hover:text-blue-600 transition" />
            <FaUser className="cursor-pointer hover:text-blue-600 transition" />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="bg-gray-50 py-10 min-h-screen">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 
              hover:-translate-y-1 hover:border-blue-300 overflow-hidden"
            >
              {/* Image Section */}
              <div className="overflow-hidden relative rounded-t-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-44 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col h-full">
                <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  {product.category}
                </span>
                <h3 className="text-base font-semibold text-gray-800 mb-3">
                  {product.name}
                </h3>

                {/* Quantity Selector */}
                <div className="flex items-center gap-3 mb-4">
                  <button
                    onClick={() => decreaseQty(product.id)}
                    className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded-full 
                    hover:bg-gray-100 transition"
                  >
                    −
                  </button>
                  <span className="text-sm font-medium min-w-[22px] text-center text-gray-700">
                    {product.quantity}
                  </span>
                  <button
                    onClick={() => increaseQty(product.id)}
                    className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded-full 
                    hover:bg-gray-100 transition"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 
                  text-white text-xs font-semibold py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Add to Cart
                </button>

                {/* Delete Button */}
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="mt-3 flex items-center justify-center gap-2 bg-red-50 text-red-500 text-xs font-medium py-2 rounded-full 
                  hover:bg-red-100 transition-all duration-300"
                >
                  <FaTrash className="text-sm" />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
