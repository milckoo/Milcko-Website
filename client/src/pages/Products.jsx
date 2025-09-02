import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../contexts/CartContext";
import milkImage from "../assets/images/milkbottles.png";
import curdImage from "../assets/images/curd.png";
import paneerImage from "../assets/images/paneer.png";
import tofuImage from "../assets/images/tofu.png";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";	

const demoProducts = [
  {
    id: 1,
    name: "Milk",
    price: 60,
    rating: 5,
    description: "Fresh and pure cow milk, delivered daily from our trusted farms.",
    image: milkImage,
  },
  {
    id: 2,
    name: "Curd",
    price: 40,
    rating: 4,
    description: "Homemade curd, rich in probiotics and essential nutrients.",
    image: curdImage,
  },
  {
    id: 3,
    name: "Paneer",
    price: 80,
    rating: 5,
    description: "Soft and fresh paneer cubes, perfect for your favorite dishes.",
    image: paneerImage,
  },
  {
    id: 4,
    name: "Tofu",
    price: 90,
    rating: 4,
    description: "Healthy and protein-rich tofu, great for vegetarian diets.",
    image: tofuImage,
  },
  {
    id: 5,
    name: "Ghee",
    price: 120,
    rating: 5,
    description: "Pure desi ghee made from traditional methods.",
    image: milkImage, // Replace with actual ghee image
  },
  {
    id: 6,
    name: "Butter",
    price: 70,
    rating: 4,
    description: "Fresh homemade butter, creamy and delicious.",
    image: curdImage, // Replace with actual butter image
  },
];

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
	<>
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-28 pb-10 px-4 bg-gradient-to-r from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-green-600">Fresh</span> Products
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of fresh dairy products, delivered straight from our farms to your doorstep.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {demoProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            Why Choose Our Products?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚜</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Farm Fresh</h3>
              <p className="text-gray-600">Direct from our farms to your home within hours</p>
            </div>
            
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">100% Natural</h3>
              <p className="text-gray-600">No preservatives or artificial ingredients</p>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Free Delivery</h3>
              <p className="text-gray-600">Quick and reliable delivery at your convenience</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Experience Freshness?
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Join thousands of happy customers who trust us for their daily dairy needs.
          </p>
          <button
            className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            onClick={() => navigate("/subscription")}
          >
            Start Your Subscription
          </button>
        </div>
      </div>

      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    </div>
	<Footer />
	</>
  );
};

export default Products;