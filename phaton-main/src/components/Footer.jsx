import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const ipResponse = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipResponse.json();
      const ip = ipData.ip;
      const page = window.location.pathname;

      const data = { email, ip, page };
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwAKCeb5TqlM_pAhQjQb4QjjDNRop1XY-TSVbUIr2045xAApyWIyg3_gajrGY6s5EI4vw/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setMessage("✅ Thank you for subscribing!");
        setEmail("");
      } else {
        setMessage("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Newsletter error:", error);
      setMessage("❌ Failed to send. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a0a] via-[#101010] to-[#0f172a] text-gray-300 py-14 overflow-hidden">
      {/* Subtle glowing gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-700/10 via-transparent to-purple-700/10 pointer-events-none blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-14 gap-10 p-6 rounded-2xl border border-gray-800 bg-gradient-to-r from-blue-900/10 via-gray-800/20 to-purple-900/10 shadow-[0_0_25px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all hover:shadow-[0_0_35px_rgba(59,130,246,0.3)]">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold text-white mb-2">Phaton</h2>
            <p className="text-sm text-gray-400 mb-1 tracking-wide">
              Subscribe to Updates
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Stay informed about our latest digital products and offers.
            </p>
          </div>

          <div className="w-full md:w-2/3 max-w-lg">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-1">
                <FiMail className="absolute left-3 top-2.5 text-gray-500 text-sm" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Here"
                  required
                  className="w-full pl-9 pr-3 py-2 text-sm bg-black/40 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-500 hover:to-blue-500 text-white text-sm rounded-lg shadow-md transition-all duration-300 disabled:opacity-70"
              >
                {loading ? "Submitting..." : "Join"}
              </button>
            </form>

            {message && <p className="text-xs mt-3 text-gray-400">{message}</p>}
            <p className="text-xs text-gray-500 mt-2">
              By subscribing, you accept our Privacy Policy and Terms.
            </p>
          </div>
        </div>

        {/* Divider with glow */}
        <div className="border-t border-gray-800 mb-10 relative">
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent blur-sm"></div>
        </div>

        {/* Footer Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 mb-16">
          {[
            {
              title: "Support",
              links: [
                "Help Center",
                "FAQs",
                "Report a Bug",
                "Request a Feature",
              ],
            },
            {
              title: "Contact Us",
              links: [
                "support@example.com",
                "+1 234 567 890",
                "123 Business Street",
                "New York, USA",
              ],
            },
            {
              title: "Resources",
              links: [
                "Blog Posts",
                "Case Studies",
                "Webinars",
                "Ebooks",
                "Guides",
              ],
            },
            {
              title: "Community",
              links: [
                "Help Center",
                "Live Chat",
                "Feedback",
                "Forum",
                "Stay Connected",
              ],
            },
            {
              title: "Updates",
              links: [
                "Email Newsletter",
                "Latest Updates",
                "Special Offers",
                "Product News",
                "Exclusive Content",
              ],
            },
            {
              title: "Legal",
              links: [
                "Terms of Use",
                "Cookie Policy",
                "User Agreement",
                "Data Protection",
                "Credits",
              ],
            },
          ].map((col, i) => (
            <div key={i}>
              <h3 className="text-white font-semibold mb-3 text-lg tracking-wide">
                {col.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      to="#"
                      className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:pl-1"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media Bottom Footer */}
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Social Media Icons */}
          <div className="flex items-center space-x-5 text-gray-400">
            <a
              href="#"
              className="hover:text-blue-500 transition-transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-sky-400 transition-transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition-transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-blue-700 transition-transform hover:scale-110"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-transform hover:scale-110"
            >
              <FaGithub />
            </a>
          </div>

          {/* Footer Text */}
          <p className="text-xs text-gray-500 text-center sm:text-right">
            © {new Date().getFullYear()}{" "}
            <span className="text-blue-400">Phaton</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
