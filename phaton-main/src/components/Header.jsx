import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const menuRef = useRef(null);
  const searchRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Close search on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    if (searchOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <header className="border-b border-gray-200 bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-[50]">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 flex items-center justify-between relative">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 z-[60] group outline-none focus:outline-none"
          >
            <img
              src="/logo.jpg"
              alt="logo"
              className="h-12 w-12 rounded-full select-none"
              draggable="false"
            />
            <span className="font-extrabold text-xl tracking-wider text-gray-800 relative group select-none">
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500 bg-clip-text text-transparent group-hover:brightness-110 transition-all duration-300">
                Phaton
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 flex-shrink-0 z-[60] text-gray-700 font-medium pr-6">
            {["About", "Products", "Sign Up"].map((name, i) => (
              <Link
                key={i}
                to={`/${name.toLowerCase().replace(" ", "")}`}
                className="relative group outline-none focus:outline-none"
              >
                <span
                  className="text-sm transition-all duration-300 transform group-hover:scale-110 
                    group-hover:text-blue-600 hover:brightness-110"
                >
                  {name}
                </span>
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] 
                    bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full 
                    transition-all duration-300 group-hover:w-3/4 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                ></span>
              </Link>
            ))}

            {/* Search Icon */}
            <div ref={searchRef} className="relative">
              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer"
                onClick={() => setSearchOpen((prev) => !prev)}
              >
                <FiSearch
                  className={`w-5 h-5 transition-colors duration-200 ${
                    searchOpen
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                />
              </motion.div>

              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ opacity: 0, x: 30, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 30, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-0 mt-3 w-64 bg-white border border-gray-200 rounded-full shadow-lg px-4 py-2 flex items-center gap-2"
                  >
                    <FiSearch className="text-gray-600 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="flex-1 bg-transparent outline-none text-sm text-gray-700"
                      autoFocus
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Cart Icon */}
            <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
              <Link
                to="/cart/checkout"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                title="View Cart"
              >
                <FiShoppingCart className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Cart & Menu */}
          <div className="flex items-center gap-4 md:hidden z-[60]">
            <Link
              to="/cart/checkout"
              className="text-gray-700 hover:text-blue-600 transition-colors mr-2"
            >
              <FiShoppingCart className="w-6 h-6" />
            </Link>

            <button
              className="text-gray-700 text-3xl focus:outline-none"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[900]"
              onClick={() => setMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              ref={menuRef}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-white shadow-2xl 
              border-r border-gray-200 flex flex-col items-center gap-6 px-8 py-10 z-[1000] overflow-y-auto"
            >
              {/* Mobile Search */}
              <div
                className="w-full flex items-center bg-white/70 border border-gray-200 rounded-full px-4 py-2 gap-3 shadow-sm backdrop-blur-sm 
                focus-within:shadow-md focus-within:border-blue-400 transition-all duration-300"
              >
                <FiSearch className="w-5 h-5 text-gray-600" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 bg-transparent outline-none placeholder-gray-500 text-sm text-gray-800"
                />
              </div>

              {/* Mobile Links */}
              {["About", "Products", "Sign Up"].map((name, i) => (
                <Link
                  key={i}
                  to={`/${name.toLowerCase().replace(" ", "")}`}
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center text-lg text-gray-700 font-medium 
                    hover:text-white hover:scale-105 transition-all duration-300 
                    relative group bg-white/70 rounded-full py-3 shadow-sm 
                    hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 outline-none focus:outline-none"
                >
                  {name}
                  <span className="absolute left-1/2 bottom-2 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-300 group-hover:w-3/4 group-hover:-translate-x-1/2"></span>
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
