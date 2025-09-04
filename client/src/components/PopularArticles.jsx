import React from 'react';
import image1 from '../assets/images/image20.png';
import image2 from '../assets/images/iamge21.png';
import image3 from '../assets/images/image22.png';
import image4 from '../assets/images/image23.png'; 

// --- Data for the Articles ---
// IMPORTANT: Replace these placeholder URLs with your actual image paths.
const featuredArticle = {
  imageSrc: image1, // Use the imported image directly
  title: 'Why Fresh Milk Within an Hour Makes All the Difference',
  tag: 'Health & Nutrition',
  link: '#', // Add link to article
};

const otherArticles = [
  {
    imageSrc: image2, // Replace with your image
    title: 'How Technology is Changing the Lives of Our Farmers',
    excerpt: 'From payments to fair pricing, see how simple tools empower farmers every day.',
    tag: 'Farmer Stories',
    link: '#',
  },
  {
    imageSrc:image3, // Replace with your image
    title: 'Little Rituals: How Milk Connects Families Every Day',
    excerpt: 'Whether in tea, coffee, or a bedtime glass—discover how milk shapes moments.',
    tag: 'Everyday Living',
    link: '#',
  },
  {
    imageSrc: image4, // Replace with your image
    title: '5 Simple Milk-Based Recipes You Can Try This Week',
    excerpt: 'From smoothies to desserts, quick and fun ways to make the most of fresh milk.',
    tag: 'Recipes',
    link: '#',
  },
];

// --- Reusable Tag Component ---
const ArticleTag = ({ text }) => (
  <span className="inline-block mt-4 bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full border border-gray-200">
    {text}
  </span>
);


function PopularArticles() {
  return (
    <section className="bg-[#FEFBF1]  font-sans py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Section Header --- */}
        <div className="flex justify-between items-start sm:items-center mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800">Popular Articles</h2>
            <p className="mt-2 text-lg text-gray-600">
              Stay informed with trending reads from the world of milk and wellness.
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-block bg-amber-500 hover:bg-amber-600 text-neutral-800 font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
          >
            See More
          </a>
        </div>

        {/* --- Articles Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-12 gap-8">
          
          {/* --- Featured Article (Left Column) --- */}
          <div className="lg:col-span-3">
            <a href={featuredArticle.link} className="block group">
        <div className="overflow-hidden rounded-4xl">
  <img 
    src={featuredArticle.imageSrc} 
    alt={featuredArticle.title} 
    className="w-[40rem] h-[25rem] object-cover transition-transform duration-500 group-hover:scale-105"
  />
</div>

              <div className="mt-6">
                <h3 className="text-3xl font-bold text-gray-900 group-hover:text-green-800 transition-colors">
                  {featuredArticle.title}
                </h3>
                <ArticleTag text={featuredArticle.tag} />
              </div>
            </a>
          </div>

          {/* --- Other Articles (Right Column) --- */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {otherArticles.map((article) => (
              <a href={article.link} key={article.title} className="flex gap-4 group">
                <div className="w-28 h-28 flex-shrink-0 overflow-hidden rounded-xl">
                  <img 
                    src={article.imageSrc} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-green-800 transition-colors">
                    {article.title}
                  </h4>
                  <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <ArticleTag text={article.tag} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularArticles;