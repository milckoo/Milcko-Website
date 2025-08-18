import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/outline';
import { AuthContext } from '../contexts/AuthContext';
import { motion } from 'framer-motion';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { currentUser, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  // Calculate cart totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 5.00 : 0;
  const tax = subtotal * 0.07; // 7% tax
  const total = subtotal + shipping + tax;

  // Fetch cart data
  useEffect(() => {
    const fetchCart = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        if (!token) {
          // Get cart from local storage if not logged in
          const localCart = JSON.parse(localStorage.getItem('cart') || '[]');
          setCartItems(localCart);
          setLoading(false);
          return;
        }

        const response = await fetch('http://localhost:4500/api/cart', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch cart');
        }

        const data = await response.json();
        setCartItems(data.items || []);
      } catch (err) {
        setError(err.message || 'Error fetching cart');
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [isAuthenticated]);

  // Update item quantity
  const updateQuantity = async (itemId, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      // Update local state first for better UX
      setCartItems(prevItems =>
        prevItems.map(item =>
          item._id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );

      const token = localStorage.getItem('token');
      if (!token) {
        // Update in local storage if not logged in
        const localCart = JSON.parse(localStorage.getItem('cart') || '[]');
        const updatedCart = localCart.map(item =>
          item._id === itemId ? { ...item, quantity: newQuantity } : item
        );
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return;
      }

      // Update on server
      const response = await fetch(`http://localhost:4500/api/cart/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ quantity: newQuantity })
      });

      if (!response.ok) {
        throw new Error('Failed to update cart');
      }
    } catch (err) {
      setError(err.message || 'Error updating item');
    }
  };

  // Remove item from cart
  const removeItem = async (itemId) => {
    try {
      // Update local state first
      setCartItems(prevItems => prevItems.filter(item => item._id !== itemId));

      const token = localStorage.getItem('token');
      if (!token) {
        // Remove from local storage if not logged in
        const localCart = JSON.parse(localStorage.getItem('cart') || '[]');
        const updatedCart = localCart.filter(item => item._id !== itemId);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return;
      }

      // Remove on server
      const response = await fetch(`http://localhost:4500/api/cart/${itemId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to remove item');
      }
    } catch (err) {
      setError(err.message || 'Error removing item');
    }
  };

  // Handle checkout
  const handleCheckout = () => {
    if (!isAuthenticated) {
      // Redirect to login with return URL
      navigate('/login?redirect=checkout');
      return;
    }
    navigate('/checkout');
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-28 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-500"></div>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-28 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8">Your Cart</h1>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg p-12 text-center">
            <h3 className="text-xl font-medium text-gray-700">Your cart is empty</h3>
            <p className="mt-2 text-gray-500">Add some milk products to get started!</p>
            <Link
              to="/products"
              className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-yellow-400 hover:bg-yellow-500"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8">Your Cart</h1>
        
        {error && (
          <div className="mb-4 bg-red-50 border-l-4 border-red-400 p-4">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <motion.li 
                    key={item._id}
                    className="p-6 flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.image || 'https://via.placeholder.com/150'}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{item.name}</h3>
                          <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                      </div>

                      <div className="flex-1 flex items-end justify-between text-sm mt-2">
                        <div className="flex items-center border border-gray-300 rounded">
                          <button
                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700"
                            onClick={() => updateQuantity(item._id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="px-4 py-1 text-gray-700">{item.quantity}</span>
                          <button
                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700"
                            onClick={() => updateQuantity(item._id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          className="font-medium text-red-600 hover:text-red-500 flex items-center"
                          onClick={() => removeItem(item._id)}
                        >
                          <TrashIcon className="h-5 w-5 mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <Link
                to="/products"
                className="text-yellow-600 hover:text-yellow-500 flex items-center"
              >
                <span className="mr-2">←</span>
                Continue Shopping
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              <div className="flow-root">
                <dl className="text-sm">
                  <div className="py-2 flex items-center justify-between">
                    <dt className="text-gray-600">Subtotal</dt>
                    <dd className="font-medium text-gray-900">${subtotal.toFixed(2)}</dd>
                  </div>
                  <div className="py-2 flex items-center justify-between">
                    <dt className="text-gray-600">Shipping</dt>
                    <dd className="font-medium text-gray-900">${shipping.toFixed(2)}</dd>
                  </div>
                  <div className="py-2 flex items-center justify-between">
                    <dt className="text-gray-600">Tax</dt>
                    <dd className="font-medium text-gray-900">${tax.toFixed(2)}</dd>
                  </div>
                  <div className="py-2 flex items-center justify-between border-t border-gray-200">
                    <dt className="text-gray-600 font-medium">Total</dt>
                    <dd className="text-gray-900 font-medium">${total.toFixed(2)}</dd>
                  </div>
                </dl>
              </div>

              <div className="mt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-yellow-400 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-black hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                  onClick={handleCheckout}
                >
                  Checkout
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;