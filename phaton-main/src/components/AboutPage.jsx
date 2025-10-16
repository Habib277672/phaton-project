import React from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1 relative overflow-hidden">
        {/* Decorative Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white opacity-60 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          {/* Title Section */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600 tracking-tight mb-4">
              About <span className="text-indigo-500">Phaton</span>
            </h1>
            <div className="w-28 h-1.5 mx-auto bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              Welcome to{" "}
              <span className="font-semibold text-blue-600">Phaton</span> — a
              platform built to empower{" "}
              <span className="text-indigo-500 font-semibold">creators</span>,
              developers, and entrepreneurs with tools that inspire innovation
              and drive growth. We believe in making technology accessible,
              efficient, and beautiful — for everyone.
            </p>
          </motion.div>

          {/* Info Cards Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "1. Who We Are",
                  text: "We’re a passionate team of designers and developers creating next-generation digital experiences that connect people worldwide.",
                },
                {
                  title: "2. Our Mission",
                  text: "To empower businesses and individuals with powerful, scalable, and visually stunning web solutions that spark creativity and growth.",
                },
                {
                  title: "3. What We Do",
                  text: "From modern web applications to user-centered tools — we craft digital products that are fast, responsive, and elegant.",
                },
                {
                  title: "4. Our Values",
                  text: "Transparency, innovation, and collaboration. Every project we take on is a promise to deliver with integrity and excellence.",
                },
              ].map((item, id) => (
                <motion.div
                  key={id}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-md"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: id * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-lg font-bold text-gray-800 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Right Visual Section */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                "https://images.pexels.com/photos/28948225/pexels-photo-28948225/free-photo-of-hand-holding-e-reader-displaying-text-on-yellow-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://www.dice.com/binaries/medium/content/gallery/dice/insights/2024/03/adobestock_555498374.jpeg",
                "https://static.wixstatic.com/media/b31d161c2d5b4abf8c9d06c62e5fe2ff.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/b31d161c2d5b4abf8c9d06c62e5fe2ff.jpg",
                "https://www.devicemagic.com/wp-content/uploads/2021/06/mobile-apps-1-scaled.jpg",
              ].map((src, i) => (
                <motion.div
                  key={i}
                  className="rounded-2xl overflow-hidden w-full h-44 sm:h-52 md:h-60 shadow-sm hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={src}
                    alt={`About visual ${i}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
