import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-yellow-100 border-2 border-yellow-300 rounded-3xl shadow-xl p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={product.image}
        alt={product.name}
        className="w-48 h-48 object-cover rounded-2xl mb-4 border-4 border-yellow-200 shadow-lg transition-all duration-300 hover:scale-110"
      />
      <h2 className="text-2xl font-extrabold text-yellow-900 mb-2 tracking-wide">
        {product.name}
      </h2>
      <p className="text-yellow-800 text-base mb-3 text-center">
        {product.description}
      </p>
      <div className="flex justify-between items-center w-full mb-4">
        <span className="text-xl font-bold text-yellow-700 bg-yellow-200 px-4 py-2 rounded-full shadow">
          ₹{product.price}
        </span>
        <span className="text-yellow-500 text-lg font-semibold flex items-center gap-1">
          ⭐ {product.rating}
        </span>
      </div>
      <div className="flex gap-3 w-full">
        <button
          className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold py-3 rounded-xl transition-all duration-200 shadow-lg"
          onClick={() => addToCart(product, 1)}
        >
          Add to Cart
        </button>
        <button
          className="flex-1 bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-3 rounded-xl transition-all duration-200 shadow-lg"
          onClick={() => navigate("/checkout")}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
