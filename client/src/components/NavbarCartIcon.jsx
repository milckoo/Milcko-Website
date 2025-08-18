import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { CartContext } from '../contexts/CartContext';

const NavbarCartIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Add default empty array to prevent undefined error
  const { cartItems = [], removeFromCart } = useContext(CartContext);
  
  // Safe calculations with null checks
  const totalItems = cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;
  const subtotal = cartItems?.reduce((total, item) => total + (item.price * item.quantity), 0) || 0;
  
  // Show only 2-3 items in the mini cart
  const displayItems = cartItems?.slice(0, 3) || [];

  return (
    <div className="relative">
      <div 
        className="relative cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      >
        <ShoppingCartIcon className="h-6 w-6 text-white" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </div>
      
      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-50"
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="p-3 max-h-96 overflow-y-auto">
            <h3 className="text-gray-800 font-medium mb-2">Your Cart ({totalItems})</h3>
            
            {cartItems && cartItems.length > 0 ? (
              <>
                <div className="space-y-3 mb-4">
                  {displayItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-2">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-12 w-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">{item.name}</p>
                        <div className="flex justify-between">
                          <p className="text-xs text-gray-500">{item.quantity} × ₹{item.price}</p>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFromCart(item.id);
                            }}
                            className="text-xs text-red-600 hover:text-red-800"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {cartItems.length > 3 && (
                    <p className="text-xs text-gray-500 text-center">
                      +{cartItems.length - 3} more items
                    </p>
                  )}
                </div>
                
                <div className="border-t pt-2 mb-3">
                  <div className="flex justify-between font-medium">
                    <span>Subtotal:</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <Link 
                    to="/cart"
                    className="text-center w-full py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700"
                    onClick={() => setIsOpen(false)}
                  >
                    View Cart
                  </Link>
                  <Link 
                    to="/checkout"
                    className="text-center w-full py-2 px-4 bg-yellow-400 text-black font-medium rounded hover:bg-yellow-500"
                    onClick={() => setIsOpen(false)}
                  >
                    Checkout
                  </Link>
                </div>
              </>
            ) : (
              <div className="py-6 text-center text-gray-500">
                <p>Your cart is empty</p>
                <Link 
                  to="/products" 
                  className="text-green-700 text-sm hover:underline mt-2 inline-block"
                  onClick={() => setIsOpen(false)}
                >
                  Browse Products
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarCartIcon;