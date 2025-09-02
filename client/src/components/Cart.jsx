import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="max-w-8xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 mb-20">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center border-b pb-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded mr-4" />
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.quantity} × ₹{item.price}</p>
              </div>
              <button
                className="text-red-500 hover:underline"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-6">
            <span className="font-bold">Subtotal:</span>
            <span className="font-bold text-lg">₹{subtotal.toFixed(2)}</span>
          </div>
          <Link
            to="/checkout"
            className="block w-full mt-4 bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-500 text-center"
          >
            Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;