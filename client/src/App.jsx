// App.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";

// Layout Components
import Navbar from "./components/Navbar";
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
import MilkFact from "./pages/Milkfact";
import Subscription from "./pages/Subscription";
import Gallery from "./pages/Gallery";
import OurFarms from "./pages/OurFarms";

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
  // Track authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    // Listen for login/logout changes
    const handleStorage = () => setIsAuthenticated(!!localStorage.getItem("token"));
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <AuthProvider>
      <CartProvider>
       
        <Routes>
          {/* Public routes */}
          <Route
            path="/"
            element={
              <>
           
                <Home />
              </>
            }
          />
          <Route path="/milkfact" element={<MilkFact />} />
          <Route
            path="/contactus"
            element={
              <>
            
                <ContactUs />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
            
                <Products />
              </>
            }
          />
          <Route
            path="/trial-pack"
            element={
              <>
             
                <TrialPack />
              </>
            }
          />
          <Route
            path="/faqs"
            element={
              <>
              
                <FAQs />
              </>
            }
          />
          <Route
            path="/about-us"
            element={
              <>
      
                <AboutUs />
              </>
            }
          />
          <Route
            path="/our-farmers"
            element={
              <>
         
                <OurFarmers />
              </>
            }
          />
          <Route
            path="/our-process"
            element={
              <>
          
                <OurProcess />
              </>
            }
          />
          <Route
            path="/sustainability"
            element={
              <>
        
                <Sustainability />
              </>
            }
          />
          <Route
            path="/careers"
            element={
              <>
           
                <Careers />
              </>
            }
          />
          <Route
            path="/testimonials"
            element={
              <>
        
                <Testimonials />
              </>
            }
          />
          <Route
            path="/delivery-areas"
            element={
              <>
             
                <DeliveryAreas />
              </>
            }
          />
          <Route
            path="/terms-conditions"
            element={
              <>
             
                <TermsConditions />
              </>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <>
          
                <PrivacyPolicy />
              </>
            }
          />
          <Route
            path="/return-policy"
            element={
              <>
              
                <ReturnRefundPolicy />
              </>
            }
          />
          <Route
            path="/milkfact"
            element={
              <>
            
                <MilkFact />
              </>
            }
          />
          <Route
            path="/subscription"
            element={
              <>
           
                <Subscription />
              </>
            }
          />
          <Route
            path="/gallery"
            element={
              <>
            
                <Gallery />
              </>
            }
          />
          <Route
            path="/our-farms"
            element={
              <>
            
                <OurFarms />
              </>
            }
          />

          {/* Authentication routes */}
          <Route
            path="/login"
            element={
              <>
            
                <Login />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
              
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
            
                <Cart />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <>
          
                  <Checkout />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="/order-success"
            element={
              <>
             
                <OrderSuccess />
              </>
            }
          />

          <Route path="/Navbar" element={<Navbar />} />
        </Routes>
      </CartProvider>
      
    </AuthProvider>
  );
};

export default App;

