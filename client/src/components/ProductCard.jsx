import React, { useState, useEffect } from 'react';

const ProductCard = ({ product }) => {
  const [isInCart, setIsInCart] = useState(false);
  
  // Check if product is in cart
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setIsInCart(cart.some(item => item._id === product._id));
  }, [product._id]);
  
  // Add to cart function
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find(item => item._id === product._id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    setIsInCart(true);
    
    // Trigger update for navbar cart count
    window.dispatchEvent(new Event('storage'));
  };
  
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <img 
        src={product.image || 'https://via.placeholder.com/300'} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4">
        <h3 className="font-medium text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.description?.substring(0, 60)}...</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
        </div>
        
        <button 
          onClick={addToCart}
          className="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded"
        >
          {isInCart ? 'Add More' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;