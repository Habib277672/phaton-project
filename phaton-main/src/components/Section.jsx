import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Section({
  title,
  items,
  sliceCount = 6,
  showPrice = true,
}) {
  const [showAll, setShowAll] = useState(false);
  const [liked, setLiked] = useState({});

  const toggleLike = (id, e) => {
    e.preventDefault();
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const displayedItems = showAll ? items : items.slice(0, sliceCount);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-lg font-semibold text-gray-900 tracking-wide uppercase">
          {title}
        </h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-gray-500 hover:text-blue-600 transition-colors text-sm"
        >
          {showAll ? "See less..." : "See more..."}
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {displayedItems.map((item) => (
          <Link
            key={item.id}
            to={`/products/${item.id}`}
            className="group relative bg-white border border-gray-200 hover:border-blue-400/70 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out overflow-hidden w-full sm:w-[45%] md:w-[30%] lg:w-[22%]"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image container */}
              <div className="relative w-full h-64 bg-gray-50 overflow-hidden rounded-t-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>

                {/* Like Button */}
                <button
                  onClick={(e) => toggleLike(item.id, e)}
                  className="absolute top-3 left-3 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-md text-gray-500 hover:text-red-500 transition"
                >
                  <Heart
                    className={`w-5 h-5 transition-transform duration-200 ${
                      liked[item.id]
                        ? "fill-red-500 stroke-red-500 scale-110"
                        : "stroke-gray-500"
                    }`}
                  />
                </button>

                {/* Price Tag */}
                {showPrice && item.price && (
                  <span className="absolute bottom-3 right-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
                    {item.price}
                  </span>
                )}
              </div>

              {/* Product Title */}
              <div className="p-4 text-center">
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
