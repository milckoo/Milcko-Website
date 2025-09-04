import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar"; // ✅ Import Navbar

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Frontend validation
    if (
      !form.name ||
      !form.email ||
      !form.username ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("All fields are required.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:4500/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          username: form.username,
          password: form.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Registration failed");
        setLoading(false);
        return;
      }

      // ✅ Registration successful
      login(data);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Registration failed, please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar /> {/* ✅ Proper placement */}
      <div className="min-h-[calc(100vh-64px)] mt-16 flex items-center justify-center bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 p-6">
        <motion.div
          className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-gray-900">
              Create an account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Or{" "}
              <Link
                to="/login"
                className="font-semibold text-yellow-600 hover:text-yellow-500"
              >
                sign in to your existing account
              </Link>
            </p>
          </motion.div>

          {/* Error message */}
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mt-4"
              role="alert"
            >
              {error}
            </motion.div>
          )}

          {/* Form */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Full Name"
                className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
                value={form.name}
                onChange={handleChange}
              />
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
                value={form.email}
                onChange={handleChange}
              />
              <input
                id="username"
                name="username"
                type="text"
                required
                placeholder="Username"
                className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
                value={form.username}
                onChange={handleChange}
              />
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
                value={form.password}
                onChange={handleChange}
              />
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                placeholder="Confirm Password"
                className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
                value={form.confirmPassword}
                onChange={handleChange}
              />
            </div>

            {/* Terms */}
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-700"
              >
                I agree to the Terms and Privacy Policy
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg font-semibold text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 transition"
            >
              {loading ? "Creating account..." : "Create account"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default Register;
