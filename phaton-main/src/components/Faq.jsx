import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, MessageCircle, Mail, Bell } from 'lucide-react';
import Footer from './Footer';

export default function Faq() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What types of digital products do you offer?',
      answer: 'We offer a wide range of digital products including eBooks, video templates, graphics, UI kits, fonts, and premium courses. All products are instantly downloadable and come with commercial licenses.'
    },
    {
      id: 2,
      question: 'What file formats do you provide?',
      answer: 'Our products come in various formats depending on the type: PDFs and EPUB for eBooks, MP4 and MOV for videos, PSD, AI, and Figma for design files, and standard web formats for other digital assets.'
    },
    {
      id: 3,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and various other secure payment methods depending on your region.'
    }
  ];

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-start">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-600 p-4 text-2xl font-bold">?</span>
              </div>
            </div>
            <p className="text-blue-100 text-lg">
              Find quick answers to common questions. If you can't find what you're looking for, don't hesitate to contact us.
            </p>
          </div>
          
          <Link to="/notifications" className="relative mt-2">
            <Bell className="w-6 h-6 text-white hover:text-blue-100 transition" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(faq.id)}
                className="w-full cursor-pointer px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="text-left font-medium text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    openQuestion === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openQuestion === faq.id && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-gray-100 rounded-2xl p-12 text-center">
          <div className="flex justify-center mb-6">
            <MessageCircle className="w-16 h-16 text-blue-600" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Can't find the answer you're looking for? Our friendly support team is here to help you with any questions or concerns.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="flex cursor-pointer items-center gap-2 px-6 py-3 bg-white border-2 border-red-300 text-gray-700 rounded-lg hover:bg-red-50 transition">
              <MessageCircle className="w-5 h-5 text-red-500" />
              Live Chat
            </button>
            <button className="flex cursor-pointer items-center gap-2 px-6 py-3 bg-white border-2 border-blue-300 text-gray-700 rounded-lg hover:bg-blue-50 transition">
              <Mail className="w-5 h-5 text-blue-500" />
              Email Support
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}