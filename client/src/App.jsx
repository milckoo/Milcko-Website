// App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';

// Layout Components
import Navbar from './components/Navbar';
import DashboardLayout from './layouts/DashboardLayout';

// Public Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ContactUs from './pages/ContactUs';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';

// Import your existing pages - no placeholders needed
import AboutUs from './pages/AboutUs';
import TrialPack from './pages/TrialPack';
import FAQs from './pages/FAQs';
import OurFarmers from './pages/OurFarmers';
import OurProcess from './pages/OurProcess';
import Sustainability from './pages/Sustainability';
import Careers from './pages/Careers';

// Dashboard Pages
import Dashboard from './pages/Dashboard/Dashboard';
import Activity from './pages/Dashboard/Activity';
import Settings from './pages/Dashboard/Settings';
import Support from './pages/Dashboard/Support';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token');
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Routes>
          {/* Public routes with Navbar */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/contactus"
            element={
              <>
                <Navbar />
                <ContactUs />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <Navbar />
                <Products />
              </>
            }
          />
          <Route
            path="/trial-pack"
            element={
              <>
                <Navbar />
                <TrialPack />
              </>
            }
          />
          <Route
            path="/faqs"
            element={
              <>
                <Navbar />
                <FAQs />
              </>
            }
          />
          <Route
            path="/about-us"
            element={
              <>
                <Navbar />
                <AboutUs />
              </>
            }
          />
          <Route
            path="/our-farmers"
            element={
              <>
                <Navbar />
                <OurFarmers />
              </>
            }
          />
          <Route
            path="/our-process"
            element={
              <>
                <Navbar />
                <OurProcess />
              </>
            }
          />
          <Route
            path="/sustainability"
            element={
              <>
                <Navbar />
                <Sustainability />
              </>
            }
          />
          <Route
            path="/careers"
            element={
              <>
                <Navbar />
                <Careers />
              </>
            }
          />

          {/* Authentication routes */}
          <Route
            path="/login"
            element={
              <>
                <Navbar />
                <Login />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Navbar />
                <Register />
              </>
            }
          />

          {/* Dashboard protected routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/activity"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Activity />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/settings"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Settings />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/support"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Support />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          {/* Cart routes */}
          <Route
            path="/cart"
            element={
              <>
                <Navbar />
                <Cart />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Navbar />
                <Checkout />
              </>
            }
          />
          <Route
            path="/order-confirmation"
            element={
              <>
                <Navbar />
                <OrderConfirmation />
              </>
            }
          />
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
