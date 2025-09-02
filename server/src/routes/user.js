// App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";

// Layout Components
import Navbar from "./components/Navbar";
import NavbarCartIcon from "./components/NavbarCartIcon";
import DashboardLayout from "./layouts/DashboardLayout";

// Public Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ReturnRefundPolicy from "./pages/ReturnRefundPolicy";

// Other public pages
import AboutUs from "./pages/AboutUs";
import TrialPack from "./pages/TrialPack";
import FAQs from "./pages/FAQs";
import OurFarmers from "./pages/OurFarmers";
import OurProcess from "./pages/OurProcess";
import Sustainability from "./pages/Sustainability";
import Careers from "./pages/Careers";
import Testimonials from "./pages/Testimonials";
import DeliveryAreas from "./pages/DeliveryAreas";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import OrderSuccess from "./pages/OrderSuccess";

// Dashboard Pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Activity from "./pages/Dashboard/Activity";
import Settings from "./pages/Dashboard/Settings";
import Support from "./pages/Dashboard/Support";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");
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
          {/* Public routes with Navbar + Cart Icon */}
          <Route
            path="/"
            element={
              <>
                <NavbarCartIcon />
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/contactus"
            element={
              <>
                <NavbarCartIcon />
                <Navbar />
                <ContactUs />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <NavbarCartIcon />
                <Navbar />
                <Products />
              </>
            }
          />
          <Route
            path="/trial-pack"
            element={
              <>
                <NavbarCartIcon />
                <Navbar />
                <TrialPack />
              </>
            }
          />
          <Route
            path="/faqs"
            element={
              <>
                <NavbarCartIcon />
                <Navbar />
                <FAQs />
              </>
            }
          />
          <Route
            path="/about-us"
            element={
              <>
                <NavbarCartIcon />
                <Navbar />
                <AboutUs />
              </>
            }
          />
          <Route
            path="/our-farmers"
            element={
              <>
                <NavbarCartIcon />
                <Navbar />
                <OurFarmers />
              </>
            }
          />
          <Route
            path="/our-process"
            element={
              <>
                <NavbarCartIcon />
                <Navbar />
                <OurProcess />
              </>
            }
          />
          <Route
            path="/sustainability"
            element={
              <>
                <NavbarCartIcon />
                <Navbar />
                <Sustainability />
              </>
            }
          />
          <Route
            path="/careers"
            element={
              <>
                <NavbarCartIcon />
                <Navbar />
                <Careers />
              </>
            }
          />
          <Route
            path="/testimonials"
            element={
              <>
                <NavbarCartIcon />
                <Navbar />
                <Testimonials />
              </>
            }
          />
          <Route
            path="/delivery-areas"
            element={
              <>
                <NavbarCartIcon />
                <Navbar />
                <DeliveryAreas />
              </>
            }
          />
          <Route
            path="/terms-conditions"
            element={
              <>
                <NavbarCartIcon />
                <Navbar />
                <TermsConditions />
              </>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <>
                <NavbarCartIcon />
                <Navbar />
                <PrivacyPolicy />
              </>
            }
          />
          <Route
            path="/return-policy"
            element={
              <>
                <NavbarCartIcon />
                <Navbar />
                <ReturnRefundPolicy />
              </>
            }
          />

          {/* Authentication routes */}
          <Route
            path="/login"
            element={
              <>
                <NavbarCartIcon />
                <Navbar />
                <Login />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <NavbarCartIcon />
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
                <NavbarCartIcon />
                <Navbar />
                <Cart />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <NavbarCartIcon />
                <Navbar />
                <Checkout />
              </>
            }
          />
          <Route
            path="/order-success"
            element={
              <>
                <NavbarCartIcon />
                <Navbar />
                <OrderSuccess />
              </>
            }
          />
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;