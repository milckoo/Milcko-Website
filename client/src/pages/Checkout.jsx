import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod'
  });
  const [loading, setLoading] = useState(false);

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 500 ? 0 : 40;
  const total = subtotal + deliveryFee;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Function to handle Razorpay payment
  const handleOnlinePayment = async () => {
    setLoading(true);
    try {
      // 1. Create Order on Backend
      const orderResponse = await fetch('http://localhost:4500/api/payment/order', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ amount: total }),
      });
      
      if (!orderResponse.ok) {
        throw new Error('Failed to create order');
      }
      
      const order = await orderResponse.json();

      // 2. Configure Razorpay Options with your test key
      const options = {
        key: "rzp_test_1DP5mmOlF5G5ag", // Use the key directly here for testing
        amount: order.amount,
        currency: order.currency,
        name: 'Milcko',
        description: 'Fresh milk delivery payment',
        image: '/logo.png',
        order_id: order.id,
        handler: async function (response) {
          // 3. Verify Payment on Backend
          const verificationResponse = await fetch('http://localhost:4500/api/payment/verify', {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(response),
          });
          
          const verificationResult = await verificationResponse.json();

          if (verificationResult.success) {
            // Payment successful
            clearCart();
            navigate('/order-success');
          } else {
            // Payment failed
            alert('Payment verification failed. Please try again.');
          }
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: '#FFC107',
        },
      };

      // 4. Open Razorpay Modal
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment failed:', error);
      alert('An error occurred during payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.paymentMethod === 'online') {
      handleOnlinePayment();
    } else {
      // Handle Cash on Delivery
      clearCart();
      navigate('/order-success');
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-10 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 py-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold mb-4 text-yellow-900"
          >
            Your cart is empty
          </motion.h1>
          <p className="mb-6 text-yellow-700">You have no items in your cart to checkout.</p>
          <button 
            onClick={() => navigate('/products')}
            className="bg-yellow-400 text-black px-6 py-2 rounded-md hover:bg-yellow-500 font-bold transition"
          >
            Browse Products
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-10 bg-yellow-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-extrabold mb-8 text-center text-yellow-900"
        >
          Checkout
        </motion.h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-xl font-bold mb-4 text-yellow-900">Shipping Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-yellow-700 mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-yellow-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-yellow-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-yellow-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-yellow-700 mb-1">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-yellow-700 mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-yellow-700 mb-1">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-yellow-700 mb-1">PIN Code</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>
              </div>
              
              <h2 className="text-xl font-bold mb-4 text-yellow-900">Payment Method</h2>
              <div className="mb-6 space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleChange}
                    className="form-radio h-5 w-5 text-yellow-500"
                  />
                  <span className="text-yellow-700">Cash on Delivery</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="online"
                    checked={formData.paymentMethod === 'online'}
                    onChange={handleChange}
                    className="form-radio h-5 w-5 text-yellow-500"
                  />
                  <span className="text-yellow-700">Online Payment</span>
                </label>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-xl transition"
              >
                {loading ? 'Processing...' : 'Place Order'}
              </button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/3"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-xl font-bold mb-4 text-yellow-900">Order Summary</h2>
              <div className="max-h-80 overflow-y-auto mb-4">
                {cartItems.map(item => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex py-2 border-b border-yellow-100"
                  >
                    <div className="h-16 w-16 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-full w-full object-cover rounded-xl border-2 border-yellow-200"
                      />
                    </div>
                    <div className="ml-4 flex flex-col flex-grow">
                      <div className="flex justify-between">
                        <p className="font-bold text-yellow-900">{item.name}</p>
                        <p className="text-yellow-700">₹{item.price}</p>
                      </div>
                      <p className="text-yellow-700 text-sm">Qty: {item.quantity}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-yellow-700">
                  <span>Subtotal</span>
                  <span className="font-bold">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-yellow-700">
                  <span>Delivery Fee</span>
                  <span>{deliveryFee > 0 ? `₹${deliveryFee.toFixed(2)}` : 'Free'}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold text-yellow-900 text-lg">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;