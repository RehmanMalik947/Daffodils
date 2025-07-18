import React from 'react';

const Listings = () => {
  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tag: 'For Sale',
      company: 'Red Carpet Real Estate',
      address: '8502 Preston Rd. Inglewood',
      price: '$2,700',
      type: 'Apartment',
      avg: 'Avg'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tag: 'For Sale',
      company: 'Fairmount Properties',
      address: '123 Main St. Downtown',
      price: '$8,750',
      type: 'Commercial',
      avg: 'Avg'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tag: 'For Sale',
      company: 'Elite Real Estate',
      address: '456 Oak Ave. Suburbia',
      price: '$5,880',
      type: 'Offices',
      avg: 'Avg'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tag: 'For Sale',
      company: 'Premium Properties',
      address: '789 Pine St. Uptown',
      price: '$3,200',
      type: 'Apartment',
      avg: 'Avg'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tag: 'For Sale',
      company: 'Luxury Real Estate',
      address: '321 Elm St. Midtown',
      price: '$12,500',
      type: 'Villa',
      avg: 'Avg'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tag: 'For Sale',
      company: 'Urban Properties',
      address: '654 Maple Dr. Westside',
      price: '$4,100',
      type: 'Studio',
      avg: 'Avg'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tag: 'For Sale',
      company: 'Metro Real Estate',
      address: '987 Cedar Ln. Eastside',
      price: '$6,800',
      type: 'House',
      avg: 'Avg'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tag: 'For Sale',
      company: 'Prime Properties',
      address: '147 Birch Rd. Northside',
      price: '$9,200',
      type: 'Condo',
      avg: 'Avg'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tag: 'For Sale',
      company: 'Elite Real Estate',
      address: '258 Spruce Ave. Southside',
      price: '$7,400',
      type: 'Apartment',
      avg: 'Avg'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Recent Property Listed
          </h2>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.company}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {property.tag}
                  </span>
                </div>
                <button className="absolute top-3 right-3 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50">
                  <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-800 mb-1">
                  {property.company}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {property.address}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-green-500">
                    {property.price}
                  </span>
                  <div className="text-right">
                    <p className="text-gray-800 font-medium text-sm">{property.type}</p>
                    <p className="text-gray-600 text-xs">{property.avg}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Listings;