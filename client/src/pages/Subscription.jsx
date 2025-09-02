import React from 'react';

import pic8 from '../assets/images/pic10.png';
import StartJourneyBanner from '../components/StartJourneyBanner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const pricingPlans = [
  {
    name: 'Daily Delight',
    price: '₹50',
    period: '/ day',
    features: [
      '1L fresh A2 milk delivered every morning',
      'Free doorstep delivery',
      'Pause or skip anytime',
      'Freshly sourced from local farms',
      'Perfect for trying us out daily',
    ],
    buttonText: 'Start Daily Plan',
    isPopular: false,
  },
  {
    name: 'Weekly Freshness',
    price: '₹300',
    period: '/ week',
    features: [
      '7-day milk schedule with flexible skips',
      'Free extra half-liter on Sundays',
      'Priority support for changes in delivery',
      '5% off on add-ons',
    ],
    buttonText: 'Get Weekly Plan',
    isPopular: false,
  },
  {
    name: 'Monthly Goodness',
    price: '₹1,100',
    period: '/ month',
    features: [
      'Best balance of savings & flexibility',
      'Free extra half-liter on Sundays',
      'Priority support for delivery changes',
      '5% off on add-ons',
    ],
    buttonText: 'Subscribe Monthly',
    isPopular: true,
  },
  {
    name: 'Yearly Care',
    price: '₹12,000',
    period: '/ year',
    features: [
      'Huge 20% savings compared to daily pricing',
      'Seasonal offers & loyalty rewards',
      'Exclusive invite to Milko farm visits',
      'Dedicated support channel for subscribers',
    ],
    buttonText: 'Go Yearly',
    isPopular: false,
  },
];

// ✅ Checkmark Icon Component
const CheckIcon = () => (
  <svg
    className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-1"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

function Subscription() {
  return (
    <>
    <div className='mb-15'><Navbar/></div>
      {/* Subscription Plans Section */}
      <section className="relative bg-gray-900 font-sans py-20 sm:py-24">
        {/* Background Image with Overlay */}
        <img
          src={pic8}
          alt="Subscription background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* --- Header Section --- */}
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
              Choose the Plan That Fits Your <span className="text-amber-400">Lifestyle.</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              Stay worry-free with flexible subscriptions that keep your family’s milk needs covered
              all year round. Pick the plan that works best for you and enjoy freshness, savings, and
              convenience in every sip.
            </p>
          </div>

          {/* --- Pricing Grid --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 flex flex-col rounded-2xl shadow-lg border transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
                  ${
                    plan.isPopular
                      ? 'bg-amber-400 text-gray-900 border-amber-500 ring-2 ring-amber-300'
                      : 'bg-white text-gray-800 border-gray-200'
                  }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs sm:text-sm font-semibold px-4 py-1 rounded-full whitespace-nowrap shadow-md">
                    ⭐ Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-4 text-4xl font-extrabold">
                  {plan.price}
                  <span
                    className={`text-lg ml-1 font-medium ${
                      plan.isPopular ? 'text-gray-800' : 'text-gray-500'
                    }`}
                  >
                    {plan.period}
                  </span>
                </p>

                <ul className="mt-8 space-y-3 text-left text-base">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <button
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition duration-300 transform hover:scale-105 shadow-md
                      ${
                        plan.isPopular
                          ? 'bg-gray-900 text-white hover:bg-black'
                          : 'bg-green-700 text-white hover:bg-green-800'
                      }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Start Journey Banner */}
      <StartJourneyBanner />
      <Footer />
    </>
  );
}

export default Subscription;
