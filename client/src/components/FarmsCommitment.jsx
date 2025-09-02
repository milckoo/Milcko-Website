import React from 'react';

// ✅ Import your images from assets (replace file names with actual ones)
import image1 from '../assets/images/pic1.png';
import image2 from '../assets/images/pic2.png';
import image3 from '../assets/images/pic3.png';
import image4 from '../assets/images/pic4.png';

const cardData = [
  {
    imageSrc: image1,
    title: 'Well-Fed, Well-Cared',
    description:
      'Each cow receives carefully balanced feed, clean water, and daily health check-ups, ensuring optimal well-being and the highest quality milk.',
  },
  {
    imageSrc: image2,
    title: 'Daily Farm Life',
    description:
      'From morning milking to grazing and gentle care, each day is thoughtfully managed to ensure healthy cows and high-quality milk.',
  },
  {
    imageSrc: image3,
    title: 'Pristine Farm Spaces',
    description:
      'Clean barns, well-maintained pastures, and proper animal housing are top priorities, creating a safe and healthy environment for cows.',
  },
  {
    imageSrc: image4,
    title: 'Knowledge That Nurtures',
    description:
      'Farmers undergo training in animal welfare, hygiene, and modern dairy practices to ensure premium milk quality and sustainability.',
  },
];

function FarmsCommitment() {
  return (
    <section className="bg-white font-sans py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Heading Section --- */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 tracking-tight">
            Farms Built on <span className="text-green-700">Care</span> and{' '}
            <span className="text-amber-600">Commitment.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
            Our farms are home to healthy cows and passionate farmers. Every day, we prioritize animal
            welfare, cleanliness, and attentive care to deliver milk that's fresh, pure, and responsibly
            sourced.
          </p>
        </div>

        {/* --- Features Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-lg overflow-hidden flex flex-col bg-[#F9F5EC]"
            >
              {/* ✅ Image Tag */}
              <img
                src={card.imageSrc}
                alt={card.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-2 text-gray-700">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FarmsCommitment;
