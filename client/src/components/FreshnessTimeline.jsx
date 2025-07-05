// import React from 'react';

// // 📸 Import your timeline step images here
// import step1 from '../assets/icons/icon1.png';
// import step2 from '../assets/icons/icon2.png';
// import step3 from '../assets/icons/icon3.png';
// import step4 from '../assets/icons/icon4.png';
// import step5 from '../assets/icons/icon5.png';
// import step6 from '../assets/icons/icon6.png';
// import step7 from '../assets/icons/icon7.png';

// const steps = [
//   {
//     id: 1,
//     title: 'Milking at Source',
//     description:
//       'We collect fresh milk directly from small family-owned farms within an hour of milking. Every farmer is paid fairly.',
//     image: step1,
//   },
//   {
//     id: 2,
//     title: 'Chilling & Transport',
//     description:
//       'Milk is chilled to 4°C and transported in insulated tankers to maintain quality and freshness.',
//     image: step2,
//   },
//   {
//     id: 3,
//     title: 'Lab Testing',
//     description:
//       'Each batch is rigorously tested in our lab for adulterants, preservatives, and quality assurance.',
//     image: step3,
//   },
//   {
//     id: 4,
//     title: 'Glass Bottle Packaging',
//     description:
//       'Our milk is bottled in eco-friendly glass bottles to preserve freshness and eliminate plastic waste.',
//     image: step4,
//   },
//   {
//     id: 5,
//     title: 'Last-Mile Cold Delivery',
//     description:
//       'Delivered cold to your doorstep within an hour—preserving taste, nutrients, and ethical value.',
//     image: step5,
//   },
//   {
//     id: 6,
//     title: 'Real-Time Tracking',
//     description:
//       'Our system allows customers to track their delivery and milk origin in real-time via our app.',
//     image: step6,
//   },
//   {
//     id: 7,
//     title: 'Happy Customers, Happy Farmers',
//     description:
//       'With transparency, freshness, and fairness, both customers and farmers smile every day.',
//     image: step7,
//   },
// ];

// const FreshnessTimeline = () => {
//   return (
//     <div className="py-20 px-6 sm:px-10 bg-[#fefcf8]">
//       <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
//         Where <span className="text-orange-500">Freshness</span> Meets <span className="text-green-600">Ethics</span>.
//       </h2>
//       <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
//         We create milk journeys that are not just fresh, but also ethical—from farm to doorstep, with full transparency and fairness.
//       </p>

//       <div className="flex flex-col gap-16 relative">
//         {steps.map((step, index) => (
//           <div
//             key={step.id}
//             className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center justify-between gap-8`}
//           >
//             <div className="md:w-1/3 flex justify-center">
//               <img src={step.image} alt={`step-${step.id}`} className="rounded-full w-[160px] h-[160px] object-cover border-4 border-green-500 shadow-md" />
//             </div>
//             <div className="md:w-2/3 bg-green-100 rounded-lg p-6 shadow-md">
//               <h3 className="text-xl font-semibold text-green-800 mb-2">
//                 {step.id}. {step.title}
//               </h3>
//               <p className="text-gray-700">{step.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FreshnessTimeline;
 


import React from 'react';
import freshnessImage from '../assets/icons/Section 4.png'; // 🖼️ Your Section 4 image

const FreshnessTimeline = () => {
  return (
    <div className="w-full py-16 px-4 bg-[#fefcf8] flex justify-center">
      <img
        src={freshnessImage}
        alt="Where Freshness Meets Ethics"
        className="max-w-full h-auto rounded-xl shadow-lg"
      />
    </div>
  );
};

export default FreshnessTimeline;
