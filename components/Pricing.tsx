import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$29',
      period: 'per user, per month',
      features: [
        { text: '200 GB Bandwidth', included: true },
        { text: '100 GB Cloud Storage', included: true },
        { text: '24/7 Help Support', included: true },
        { text: 'Enterprise SLA', included: false }
      ],
      buttonText: 'Start Basic',
      buttonColor: 'bg-gray-500 hover:bg-gray-600',
      popular: false
    },
    {
      name: 'Standard',
      price: '$49',
      period: 'per user, per month',
      features: [
        { text: '500 GB Bandwidth', included: true },
        { text: '1000 GB Cloud Storage', included: true },
        { text: 'Personal Help Support', included: true },
        { text: 'Enterprise SLA', included: false }
      ],
      buttonText: 'Start Standard',
      buttonColor: 'bg-green-500 hover:bg-green-600',
      popular: true
    },
    {
      name: 'Platinum',
      price: '$79',
      period: 'per user, per month',
      features: [
        { text: '1000 GB Bandwidth', included: true },
        { text: '3000 GB Cloud Storage', included: true },
        { text: 'Personal Help Support', included: true },
        { text: 'Enterprise SLA', included: true }
      ],
      buttonText: 'Start Platinum',
      buttonColor: 'bg-gray-500 hover:bg-gray-600',
      popular: false
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Select Your Package
          </h2>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-lg shadow-lg p-6 ${plan.popular ? 'ring-2 ring-orange-500' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Best Value
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {plan.name}
                </h3>
                <div className="mb-1">
                  <span className="text-3xl font-bold text-gray-800">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {plan.period}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    {feature.included ? (
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span className={`text-sm ${feature.included ? 'text-gray-800' : 'text-gray-500'}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`w-full ${plan.buttonColor} text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;