import React from "react";
import { Link } from "react-router-dom";

export default function BrowseCard({ title, link = "/", image, buttonText = "Browse Now" }) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg h-80 group">
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform scale-105 transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-8 transition-all duration-500">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{title}</h2>
        <Link
          to={link}
          className="w-fit cursor-pointer bg-gray-800 text-white font-semibold px-5 py-2 sm:px-6 sm:py-3 rounded-lg active:scale-95 transition"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
