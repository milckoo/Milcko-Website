import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const CartSection = () => {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const isAuthenticated = !!localStorage.getItem("token");

  const handleCheckout = () => {
    if (!isAuthenticated) {
      // Save intended redirect after login
      localStorage.setItem("redirectAfterLogin", "/checkout");
      navigate("/login");
    } else {
      navigate("/checkout");
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 50; // Example shipping cost in INR
  const tax = subtotal * 0.18; // Example tax rate of 18%
  const total = subtotal + shipping + tax;

  return (
    <div className="fixed top-24 right-5 w-96 bg-yellow-50 border-2 border-yellow-300 rounded-3xl shadow-2xl p-6 z-50 transition-all duration-300 animate-fade-in">
      <h2 className="text-2xl font-extrabold text-yellow-900 mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-yellow-700 text-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-yellow-100 rounded-xl p-3 shadow hover:scale-105 transition-transform duration-200"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-xl border-2 border-yellow-200 mr-3"
              />
              <div className="flex-1">
                <div className="font-bold text-yellow-900">{item.name}</div>
                <div className="text-yellow-700 text-sm mb-2">{item.description}</div>
                <div className="flex items-center gap-2">
                  <button
                    className="bg-yellow-300 hover:bg-yellow-400 text-yellow-900 font-bold px-2 py-1 rounded transition"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    −
                  </button>
                  <span className="px-3 py-1 bg-yellow-200 rounded font-bold text-yellow-900 text-lg">
                    {item.quantity}
                  </span>
                  <button
                    className="bg-yellow-300 hover:bg-yellow-400 text-yellow-900 font-bold px-2 py-1 rounded transition"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <span className="ml-4 font-bold text-yellow-900 text-lg">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
              <button
                className="ml-2 text-yellow-900 bg-yellow-300 hover:bg-yellow-400 rounded-full px-3 py-1 font-bold transition"
                onClick={() => removeFromCart(item.id)}
              >
                ×
              </button>
            </div>
          ))}
          <div className="flex flex-col mt-4">
            <div className="flex justify-between font-bold text-yellow-900">
              <span>Subtotal:</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-yellow-900">
              <span>Shipping:</span>
              <span>₹{shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-yellow-900">
              <span>Tax:</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-xl text-green-700">
              <span>Total:</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold py-2 rounded-xl shadow transition"
              onClick={handleCheckout}
            >
              Checkout
            </button>
            <button
              className="flex-1 bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-2 rounded-xl shadow transition"
              onClick={clearCart}
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSection;