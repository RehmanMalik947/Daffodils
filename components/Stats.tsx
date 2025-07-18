import React from 'react';

const Stats = () => {
  const stats = [
    {
      icon: '🏆',
      number: '32 M',
      title: 'Best launch award'
    },
    {
      icon: '💼',
      number: '43 M',
      title: 'Ultra XT Award'
    },
    {
      icon: '💡',
      number: '51 M',
      title: 'Australian UGC Award'
    },
    {
      icon: '❤️',
      number: '42 M',
      title: 'HDA award'
    }
  ];

  return (
    <section className="py-12 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-base font-medium text-blue-200 mb-2">
            Our Awards
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-4xl mx-auto">
            Over 1,24,000+ Happy User Being With Us Still They Love Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {stat.number}
              </div>
              <p className="text-blue-200 text-base">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;