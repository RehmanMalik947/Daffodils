import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Logo and Newsletter */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center mr-2">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold">RentUP</span>
            </div>
            <p className="text-gray-300 mb-4 text-sm">
              Do You Need Help With Anything?
            </p>
            <p className="text-gray-400 mb-3 text-sm">
              Receive updates and discounts on your email.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-3 py-2 rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              />
              <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-r-lg font-medium transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>

          {/* LAYOUTS */}
          <div>
            <h3 className="text-base font-semibold mb-4">LAYOUTS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Home Page</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">About Page</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Service Page</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Property Page</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Contact Page</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Single Blog</a></li>
            </ul>
          </div>

          {/* ALL SECTIONS */}
          <div>
            <h3 className="text-base font-semibold mb-4">ALL SECTIONS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Header</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Hero</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Property</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Agent</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-base font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2023 RentUP. Designed by Mark Gamin
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;