import React from 'react';

const ContactCTA = () => {
  return (
    <section className="py-12 bg-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Do You Have Questions?
            </h2>
            <p className="text-lg text-green-100">
              We help you to grow your career and growth.
            </p>
          </div>
          <div>
            <button className="bg-white text-green-500 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-base transition-colors">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;