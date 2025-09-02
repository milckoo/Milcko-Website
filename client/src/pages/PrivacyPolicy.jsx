import React from "react";
import Footer from "../components/Footer"; // ✅ make sure path is correct
import DataChoiceSection from "../components/DataChoiceSection";
import Navbar from '../components/Navbar';

const PrivacyPolicy = () => {
  return (
    <>
    <div className="bg-white font-sans text-black max-w-5xl mx-auto p-4 md:p-8">
   <div className="mb-15">
       <Navbar/>
   </div>
      {/* Privacy Policy Header */}
      <header className="text-center mb-12 mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
          Privacy Policy
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Your <span className="font-semibold">Privacy,</span> Our{" "}
          <span className="text-[#F1AB49] font-extrabold">Commitment.</span>
        </p>
        <p className="mt-6 text-gray-700 max-w-3xl mx-auto">
          Milcko is dedicated to safeguarding your personal information and ensuring 
          that your trust in us is well-placed. This policy explains what data we collect, 
          why we collect it, how we protect it, and the rights you have over your information.
        </p>
      </header>

      {/* Policy Sections */}
      <section className="space-y-10">
        {/* Section: Information We Collect */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Information We Collect</h2>
          <ul className="list-none space-y-4 text-gray-700">
            <li>
              <h3 className="font-bold text-gray-900">Personal Information:</h3>
              <p className="mt-1">
                Name, address, phone number, and email ID, provided during account creation or checkout.
              </p>
            </li>
            <li>
              <h3 className="font-bold text-gray-900">Order Information:</h3>
              <p className="mt-1">
                Products purchased, payment method (without storing sensitive card details), and delivery preferences.
              </p>
            </li>
            <li>
              <h3 className="font-bold text-gray-900">Technical Information:</h3>
              <p className="mt-1">
                Device type, operating system, browser type, and IP address to enhance our platform’s performance.
              </p>
            </li>
            <li>
              <h3 className="font-bold text-gray-900">Interaction Data:</h3>
              <p className="mt-1">
                Messages or inquiries sent to customer support and responses to our surveys or feedback forms.
              </p>
            </li>
          </ul>
        </div>

        {/* Section: How We Use Your Information */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">How We Use Your Information</h2>
          <ul className="list-none space-y-4 text-gray-700">
            <li>
              <h3 className="font-bold text-gray-900">Order Fulfillment:</h3>
              <p className="mt-1">Processing, packaging, and delivering your orders accurately and on time.</p>
            </li>
            <li>
              <h3 className="font-bold text-gray-900">Customer Communication:</h3>
              <p className="mt-1">Sending order confirmations, updates, promotional offers, and responding to inquiries.</p>
            </li>
            <li>
              <h3 className="font-bold text-gray-900">Service Improvements:</h3>
              <p className="mt-1">Analysing data trends to enhance website performance, product offerings, and customer satisfaction.</p>
            </li>
            <li>
              <h3 className="font-bold text-gray-900">Legal & Compliance:</h3>
              <p className="mt-1">Meeting legal obligations, resolving disputes, and enforcing agreements.</p>
            </li>
          </ul>
        </div>

        {/* Section: How We Protect Your Data */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">How We Protect Your Data</h2>
          <ul className="list-none space-y-4 text-gray-700">
            <li>
              <h3 className="font-bold text-gray-900">Encryption:</h3>
              <p className="mt-1">Sensitive data is encrypted during storage and transmission.</p>
            </li>
            <li>
              <h3 className="font-bold text-gray-900">Secure Systems:</h3>
              <p className="mt-1">Regular system updates and firewall protections prevent unauthorized access.</p>
            </li>
            <li>
              <h3 className="font-bold text-gray-900">Monitoring & Audits:</h3>
              <p className="mt-1">Regular audits and monitoring to detect potential vulnerabilities early.</p>
            </li>
            <li>
              <h3 className="font-bold text-gray-900">Limited Access:</h3>
              <p className="mt-1">
                Only authorised personnel can access your personal data, and only for legitimate business needs.
              </p>
            </li>
          </ul>
        </div>

        {/* Section: Sharing of Information */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Sharing of Information</h2>
          <ul className="list-none space-y-4 text-gray-700">
            <li>
              <h3 className="font-bold text-gray-900">With Service Providers:</h3>
              <p className="mt-1">
                Such as payment gateways, delivery partners, and IT service providers, strictly for order fulfillment.
              </p>
            </li>
            <li>
              <h3 className="font-bold text-gray-900">As Required by Law:</h3>
              <p className="mt-1">
                When legal processes demand it or for the protection of rights and safety.
              </p>
            </li>
          </ul>
        </div>

        {/* Section: Your Rights */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Your Rights</h2>
          <ul className="list-none space-y-4 text-gray-700">
            <li>
              <h3 className="font-bold text-gray-900">Access:</h3>
              <p className="mt-1">Request a copy of your personal information stored with us.</p>
            </li>
            <li>
              <h3 className="font-bold text-gray-900">Correction:</h3>
              <p className="mt-1">Update or amend any incorrect or incomplete details.</p>
            </li>
            <li>
              <h3 className="font-bold text-gray-900">Deletion:</h3>
              <p className="mt-1">
                Request permanent removal of your personal data (subject to legal requirements).
              </p>
            </li>
            <li>
              <h3 className="font-bold text-gray-900">Opt-Out:</h3>
              <p className="mt-1">Unsubscribe from promotional communications at any time.</p>
            </li>
          </ul>
        </div>
      </section>

  
    
    </div>
        <DataChoiceSection />
     
        <Footer />
        </>
  );
};

export default PrivacyPolicy;
