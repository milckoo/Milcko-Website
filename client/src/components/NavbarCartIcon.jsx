import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const NavbarCartIcon = () => {
  const [cartCount, setCartCount] = useState(0);
  
  // Update cart count when localStorage changes
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
    };
    
    // Initial count
    updateCartCount();
    
    // Listen for storage events
    window.addEventListener('storage', updateCartCount);
    return () => window.removeEventListener('storage', updateCartCount);
  }, []);

  return (
    <Link 
      to="/cart" 
      className="relative p-2 text-white hover:text-yellow-400 transition-colors"
    >
      <ShoppingCartIcon className="h-6 w-6" />
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-yellow-500 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </Link>
  );
};

export default NavbarCartIcon;