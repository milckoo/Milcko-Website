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
  const shipping = subtotal > 0 ? 50.0 : 0; // INR
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + shipping + tax;

  // Fetch cart data
  useEffect(() => {
    const fetchCart = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        if (!token) {
          const localCart = JSON.parse(localStorage.getItem('cart') || '[]');
          setCartItems(localCart);
          setLoading(false);
          return;
        }
        const response = await fetch('http://localhost:4500/api/cart', {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (!response.ok) throw new Error('Failed to fetch cart');
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
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
      const token = localStorage.getItem('token');
      if (!token) {
        const localCart = JSON.parse(localStorage.getItem('cart') || '[]');
        const updatedCart = localCart.map(item =>
          item._id === itemId ? { ...item, quantity: newQuantity } : item
        );
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return;
      }
      await fetch(`http://localhost:4500/api/cart/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ quantity: newQuantity })
      });
    } catch (err) {
      setError(err.message || 'Error updating item');
    }
  };

  // Remove item from cart
  const removeItem = async (itemId) => {
    try {
      setCartItems(prevItems => prevItems.filter(item => item.id !== itemId)); // <-- use id
      const token = localStorage.getItem('token');
      if (!token) {
        const localCart = JSON.parse(localStorage.getItem('cart') || '[]');
        const updatedCart = localCart.filter(item => item.id !== itemId); // <-- use id
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return;
      }
      await fetch(`http://localhost:4500/api/cart/${itemId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch (err) {
      setError(err.message || 'Error removing item');
    }
  };

  // Handle checkout
  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate('/login?redirect=checkout');
      return;
    }
    navigate('/checkout');
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-28 pb-12 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-400 border-b-4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-28 pb-12 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-yellow-900 mb-8">Your Cart</h1>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white shadow-lg overflow-hidden sm:rounded-3xl p-12 text-center"
          >
            <h3 className="text-xl font-medium text-yellow-700">Your cart is empty</h3>
            <p className="mt-2 text-yellow-600">Add some milk products to get started!</p>
            <Link
              to="/products"
              className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-black bg-yellow-400 hover:bg-yellow-500 transition"
            >
              Browse Products
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-12 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-yellow-900 mb-8">Your Cart</h1>
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
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white shadow-lg overflow-hidden sm:rounded-3xl"
            >
              <ul className="divide-y divide-yellow-100">
                {cartItems.map((item) => (
                  <motion.li
                    key={item.id} // <-- use id if available
                    className="p-6 flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl border-2 border-yellow-200">
                      <img
                        src={item.image || 'https://via.placeholder.com/150'}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between text-base font-bold text-yellow-900">
                          <h3>{item.name}</h3>
                          <p className="ml-4 text-yellow-700">
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-yellow-700">{item.description}</p>
                      </div>
                      <div className="flex-1 flex items-end justify-between text-sm mt-2">
                        <div className="flex items-center border border-yellow-300 rounded-xl bg-yellow-50">
                          <button
                            className="px-3 py-1 bg-yellow-200 hover:bg-yellow-300 text-yellow-900 font-bold rounded-l-xl transition"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)} // <-- use id
                            disabled={item.quantity <= 1}
                          >
                            −
                          </button>
                          <span className="px-4 py-1 text-yellow-900 font-bold">{item.quantity}</span>
                          <button
                            className="px-3 py-1 bg-yellow-200 hover:bg-yellow-300 text-yellow-900 font-bold rounded-r-xl transition"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)} // <-- use id
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          className="font-medium text-red-600 hover:text-red-500 flex items-center"
                          onClick={() => removeItem(item.id)} // <-- use id
                        >
                          <TrashIcon className="h-5 w-5 mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <div className="mt-6">
              <Link
                to="/products"
                className="text-yellow-700 hover:text-yellow-900 flex items-center font-bold"
              >
                <span className="mr-2">←</span>
                Continue Shopping
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white shadow-lg overflow-hidden sm:rounded-3xl p-6"
            >
              <h2 className="text-lg font-bold text-yellow-900 mb-4">Order Summary</h2>
              <div className="flow-root">
                <dl className="text-sm">
                  <div className="py-2 flex items-center justify-between">
                    <dt className="text-yellow-700">Subtotal</dt>
                    <dd className="font-bold text-yellow-900">₹{subtotal.toFixed(2)}</dd>
                  </div>
                  <div className="py-2 flex items-center justify-between">
                    <dt className="text-yellow-700">Shipping</dt>
                    <dd className="font-bold text-yellow-900">₹{shipping.toFixed(2)}</dd>
                  </div>
                  <div className="py-2 flex items-center justify-between">
                    <dt className="text-yellow-700">Tax</dt>
                    <dd className="font-bold text-yellow-900">₹{tax.toFixed(2)}</dd>
                  </div>
                  <div className="py-2 flex items-center justify-between border-t border-yellow-200">
                    <dt className="text-yellow-900 font-bold">Total</dt>
                    <dd className="text-yellow-900 font-extrabold text-lg">₹{total.toFixed(2)}</dd>
                  </div>
                </dl>
              </div>
              <div className="mt-12">
                <Link
                  to="/checkout"
                  className="block w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-500 text-center transition"
                >
                  Checkout
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;