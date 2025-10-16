import React, { useState, useRef } from "react";
import Section from "./Section";
import Browse from "./Browse";
import { gethomepageData } from "../services/DataService";
import { motion, AnimatePresence } from "framer-motion";

export default function CategoriesWrapper() {
  const [activeCategory, setActiveCategory] = useState("all");
  const data = gethomepageData();
  const categoriesRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const categories = ["all", ...Object.keys(data)];

  const scrollPrev = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const renderContent = () => {
    if (activeCategory === "all") {
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="space-y-12"
        >
          {Object.keys(data).map((cat) => (
            <motion.div key={cat} variants={itemVariants}>
              <Section
                title={data[cat].title}
                items={data[cat].items}
                sliceCount={data[cat].sliceCount || 6}
                showPrice={data[cat].showPrice !== false}
              />
            </motion.div>
          ))}
          <motion.div variants={itemVariants}>
            <Browse />
          </motion.div>
        </motion.div>
      );
    } else {
      const current = data[activeCategory];
      if (!current) return null;

      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div variants={itemVariants}>
            <Section
              title={current.title}
              items={current.items}
              sliceCount={current.sliceCount || 6}
              showPrice={current.showPrice !== false}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Browse />
          </motion.div>
        </motion.div>
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 relative">
      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 
          bg-gradient-to-br from-blue-600 to-indigo-600 text-white 
          p-3 md:p-4 rounded-full shadow-lg 
          opacity-0 group-hover:opacity-100 
          hover:scale-110 hover:from-indigo-500 hover:to-blue-500 hover:shadow-indigo-400/40
          transition-all duration-300 backdrop-blur-md"
        >
          ◀
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 
          bg-gradient-to-br from-blue-600 to-indigo-600 text-white 
          p-3 md:p-4 rounded-full shadow-lg 
          opacity-0 group-hover:opacity-100 
          hover:scale-110 hover:from-indigo-500 hover:to-blue-500 hover:shadow-indigo-400/40
          transition-all duration-300 backdrop-blur-md"
        >
          ▶
        </button>

        {/* Scrollable Category Bar */}
        <div
          ref={categoriesRef}
          className="flex gap-4 overflow-x-auto flex-nowrap scrollbar-hide px-14 py-3 
          bg-white/50 backdrop-blur-xl border border-white/30 
          rounded-2xl shadow-md"
        >
          {categories.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-6 py-2.5 font-medium rounded-full text-sm md:text-base transition-all duration-300
                ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:from-indigo-500 hover:to-blue-500 scale-105"
                    : "bg-white/70 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500 hover:shadow-md"
                }
                ${idx === 0 ? "ml-2" : ""} ${
                idx === categories.length - 1 ? "mr-2" : ""
              }`}
            >
              {cat === "all" ? "All" : data[cat].title}
            </button>
          ))}
        </div>
      </div>

      {/* Animated Category Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="mt-10"
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
