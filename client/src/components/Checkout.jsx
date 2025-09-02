import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    state: '',
    paymentMethod: 'cod' // Default to cash on delivery
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear any previous error when user makes changes
    setError(null);
  };

  // Handle online payment through Razorpay
  const handleOnlinePayment = async () => {
    setLoading(true);
    setError(null);
    
    try {
      console.log('Starting online payment process...');
      console.log('Payment amount:', total);
      
      // Get token from localStorage
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authentication token is missing. Please log in again.');
      }
      
      // Make the API request with detailed error handling
      console.log('Sending request to create payment order...');
      let orderResponse;
      try {
        orderResponse = await fetch('http://localhost:4500/api/payment/order', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ amount: total }),
        });
        
        console.log('Order API response status:', orderResponse.status);
      } catch (fetchError) {
        console.error('Network error during fetch:', fetchError);
        throw new Error(`Network error: ${fetchError.message}`);
      }
      
      // Check if the response is valid JSON
      let orderData;
      try {
        orderData = await orderResponse.json();
        console.log('Order API response data:', orderData);
      } catch (jsonError) {
        console.error('Error parsing JSON response:', jsonError);
        throw new Error('Invalid response from server');
      }
      
      // Check if the response was successful
      if (!orderResponse.ok) {
        const errorMessage = orderData.message || 'Unknown error creating order';
        console.error('Order API error:', errorMessage);
        throw new Error(errorMessage);
      }
      
      // Check if order data has the expected fields
      if (!orderData.id || !orderData.amount) {
        console.error('Invalid order data received:', orderData);
        throw new Error('Invalid order data received from server');
      }
      
      // 2. Configure Razorpay Options
      const options = {
        key: "rzp_test_your_key_here", // Use your Razorpay test key here
        amount: orderData.amount,
        currency: orderData.currency || 'INR',
        name: 'Milcko',
        description: 'Fresh milk delivery payment',
        image: '/logo.png',
        order_id: orderData.id,
        handler: function (response) {
          // Handle successful payment
          console.log('Payment successful:', response);
          // Process order completion...
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
      
      // Open Razorpay checkout
      const rzp = new window.Razorpay(options);
      rzp.open();
      
    } catch (error) {
      console.error('Payment process error:', error);
      setError(`Payment error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Function to place the order
  const placeOrder = async (paymentMethod, paymentId = null) => {
    try {
      // Create the order in your database
      const orderData = {
        shippingAddress: {
          address: formData.address,
          city: formData.city,
          postalCode: formData.zipCode,
          state: formData.state,
        },
        paymentMethod,
        paymentId,
        orderItems: cartItems.map(item => ({
          product: item.product,
          name: item.name,
          image: item.image,
          price: item.price,
          qty: item.qty
        })),
        itemsPrice: subtotal,
        taxPrice: tax,
        shippingPrice: shipping,
        totalPrice: total,
      };

      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:4500/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to place order');
      }

      const result = await response.json();

      // Clear cart and redirect to success page
      clearCart();
      navigate('/order-success', { state: { orderId: result._id } });
    } catch (error) {
      console.error('Order placement error:', error);
      setError('Failed to place order: ' + error.message);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'zipCode', 'state'];
    const emptyField = requiredFields.find(field => !formData[field]);

    if (emptyField) {
      setError(`Please fill in the ${emptyField.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
      return;
    }

    setLoading(true);

    try {
      if (formData.paymentMethod === 'online') {
        await handleOnlinePayment();
      } else {
        // Cash on delivery flow
        await placeOrder('cod');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      setError('An error occurred during checkout: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          type="text"
          name="zipCode"
          placeholder="Zip Code"
          value={formData.zipCode}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
        <div className="payment-options">
          <h3>Payment Method</h3>
          <div>
            <input
              type="radio"
              id="cod"
              name="paymentMethod"
              value="cod"
              checked={formData.paymentMethod === 'cod'}
              onChange={handleChange}
            />
            <label htmlFor="cod">Cash on Delivery</label>
          </div>
          <div>
            <input
              type="radio"
              id="online"
              name="paymentMethod"
              value="online"
              checked={formData.paymentMethod === 'online'}
              onChange={handleChange}
            />
            <label htmlFor="online">Pay Online (Razorpay)</label>
          </div>
        </div>

        <div className="flex justify-between items-center font-bold">
          <span>Total:</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 font-bold"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
};

export default Checkout;