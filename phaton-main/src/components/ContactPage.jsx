// import React from "react";
// import { FaPaperPlane, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
// import { FaBell } from "react-icons/fa";


// import Footer from "./Footer.jsx";

// export default function ContactPage() {
//   return (
//     <>
//       <div className="min-h-screen flex flex-col">
//         {/* Navbar */}
//         <header className="flex justify-between items-center px-8 py-10 shadow">
//           <h1 className="text-2xl font-bold text-gray-800">Phaton</h1>
//           <nav className="hidden md:flex space-x-16 text-gray-500 font-normal">
//             <a href="#">Home</a>
//             <a href="#">About</a>
//             <a href="#">Privacy</a>
//           </nav>
//           <div className="flex items-center space-x-2 mr-14">
//             {/* Notification Bell with Red Dot */}
//             <div className="relative">
//                 <FaBell className="text-gray-600 w-5 h-5 cursor-pointer" />
//                 <span className="absolute -top-1 -right-1 block w-2.5 h-2.5 bg-red-500 rounded-full"></span>
//             </div>

//             {/* User Info */}
//             <div className="flex flex-col items-start">
//                 <span className="text-sm text-gray-700 font-medium">User</span>
//                 <span className="text-xs text-gray-400">jd@email.com</span>
//             </div>

//         </div>
//         </header>

//         {/* Hero Section */}
//         <section className="relative bg-yellow-400 h-64 flex flex-col justify-center items-start text-left text-white px-10">
//           <h2 className="text-6xl font-bold">Contact Us</h2>
//           <p className="mt-2 text-sm max-w-2xl">
//             We’re here to help you succeed with our digital products <br /> and services
//           </p>
//         </section>

//         {/* Contact Section */}
//         <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-16">
//           {/* Contact Form */}
//           <div className="lg:col-span-2 border rounded-lg p-6 shadow-sm">
//             <h3 className="flex items-center text-lg font-semibold mb-4 text-gray-800">
//               <FaPaperPlane className="text-blue-600 mr-2" /> Get in Touch
//             </h3>
//             <p className="text-gray-300 text-sm mb-6">
//               Choose your inquiry type and we’ll connect you <br /> with the right team member
//             </p>
//             <form className="space-y-4">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="Your name"
//                   className="w-full border rounded p-3 text-sm"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="w-full border rounded p-3 text-sm"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Phone Number"
//                   className="w-full border rounded p-3 text-sm"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Subject"
//                   className="w-full border rounded p-3 text-sm"
//                 />
//               </div>
//               <textarea
//                 placeholder="Message"
//                 rows="5"
//                 className="w-full border rounded p-3 text-sm"
//               ></textarea>
//               <div className="flex justify-end">
//                 <button
//                   type="submit"
//                   className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900 transition"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>

//           {/* Contact Info */}
//           <div className="border rounded-lg p-8 shadow-sm">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Information</h3>
//             <ul className="space-y-6 text-gray-600 text-sm">
//               <li className="flex items-start">
//                 <FaEnvelope className="text-gray-700 mt-1 mr-3" />
//                 <div>
//                   <p className="font-medium">Email Support</p>
//                   <p>support@phaton.com</p>
//                   <p className="text-xs text-gray-500">General Inquiries & Support</p>
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <FaPhoneAlt className="text-gray-700 mt-1 mr-3" />
//                 <div>
//                   <p className="font-medium">Phone Support</p>
//                   <p>+1 (555) 123-4567</p>
//                   <p className="text-xs text-gray-500">Mon-Fri, 9AM–6PM PST</p>
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <FaMapMarkerAlt className="text-gray-700 mt-1 mr-3" />
//                 <div>
//                   <p className="font-medium">Headquarters</p>
//                   <p>123 Digital Avenue</p>
//                   <p>San Francisco, CA 94015</p>
//                   <p>United States</p>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </main>

//         {/* FAQ Section */}
//         <section className="max-w-4xl mx-auto px-6 py-12 text-center">
//           <h3 className="text-2xl font-semibold text-gray-800 mb-2">
//             Frequently Asked Questions
//           </h3>
//           <p className="text-gray-500 text-sm">
//             Find quick answers to common questions. If you can’t find what you’re looking for, <br /> 
//             don’t hesitate to contact us.
//           </p>
//         </section>
//       </div>
//       <Footer />
//     </>

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Mail, Phone, MapPin, Bell } from 'lucide-react';
import Footer from './Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative bg-cover bg-center py-32 px-4 sm:px-6 md:px-12 overflow-hidden"
        style={{ backgroundImage: "url('/contact.jpg')" }} 
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="absolute top-10 right-10 sm:right-20 w-16 h-8 bg-white/30 rounded-full blur-sm"></div>
        <div className="absolute top-20 right-32 w-24 h-12 bg-white/20 rounded-full blur-sm"></div>
        <div className="absolute bottom-10 left-10 w-20 h-10 bg-white/30 rounded-full blur-sm"></div>

        <div className="absolute top-6 right-6 sm:right-12 opacity-80">
          <Link to="/notifications" className="relative">
            <Bell className="w-6 h-6 text-white hover:text-blue-400 transition" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white max-w-lg mx-auto md:mx-0">
            We're here to help you succeed with our digital products and services
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12">
        <div className="md:flex md:justify-center md:gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 border border-gray-200">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <Send className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Get in Touch</h2>
            </div>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Choose your inquiry type and we'll connect you with the right team member
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                onClick={handleSubmit}
                className="w-full cursor-pointer bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition font-medium"
              >
                Send Message
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5 sm:p-6 border border-gray-200 max-w-sm md:max-w-80 mx-auto md:mx-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Contact Information</h2>

            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base">
              <div className="flex gap-4">
                <div className="flex-shrink-0 cursor-pointer w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email Support</h3>
                  <p className="text-blue-600">support@phaton.com</p>
                  <p className="text-gray-500">General inquiries & support</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 cursor-pointer w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone Support</h3>
                  <p className="text-gray-700">+1 (555) 123-4567</p>
                  <p className="text-gray-500">Mon-Fri, 9AM-6PM PST</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 cursor-pointer w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Headquarters</h3>
                  <p className="text-gray-700">123 Digital Avenue</p>
                  <p className="text-gray-700">San Francisco, CA 94105</p>
                  <p className="text-gray-500">United States</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mb-6">
            Find quick answers to common questions. If you can't find what you're looking for, don't hesitate to contact us.
          </p>
          <Link 
            to="/faq"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View All FAQs
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
