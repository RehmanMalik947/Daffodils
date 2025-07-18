import React from 'react';

const FeaturedTypes = () => {
  const propertyTypes = [
    {
      name: 'Family House',
      count: '82 property',
      icon: '🏠',
      color: 'bg-red-500'
    },
    {
      name: 'House & Villa',
      count: '84 property',
      icon: '🏡',
      color: 'bg-green-500'
    },
    {
      name: 'Apartment',
      count: '83 property',
      icon: '🏢',
      color: 'bg-yellow-500'
    },
    {
      name: 'Office & Studio',
      count: '82 property',
      icon: '🏢',
      color: 'bg-purple-500'
    },
    {
      name: 'Villa & Condo',
      count: '82 property',
      icon: '🏘️',
      color: 'bg-blue-500'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Featured Property Types
          </h2>
          <p className="text-lg text-gray-600">
            Find All Type of Property
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {propertyTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className={`w-12 h-12 ${type.color} rounded-full flex items-center justify-center mx-auto mb-3 text-xl`}>
                {type.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-800 mb-1">
                {type.name}
              </h3>
              <p className="text-sm text-gray-600">
                {type.count}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTypes;