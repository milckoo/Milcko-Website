import React from "react";
import Footer from "../components/Footer";
import ClarificationSection from "../components/ClarificationSection";
import Navbar from '../components/Navbar';

const TermsConditions = () => {
  return (
    <div className="bg-gray-100 font-sans mt-10 text-gray-800">
<div className="mb-15">
        <Navbar />
</div>
      {/* Header Section */}
      <section className="bg-white py-10  text-center border-b border-gray-200">
        <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-3 leading-tight">
          Terms & Conditions
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600">
          Welcome to Milcko. These Terms & Conditions ("Terms") govern your
          access to and use of our website, mobile applications, and related
          services. By engaging with our platform, you agree to comply with these
          Terms and all applicable local, state, and national laws. If you do not
          agree with any part of these Terms, you should discontinue use
          immediately.
        </p>
      </section>

      {/* Main Content Section */}
      <section className="max-w-4xl mx-auto p-8 space-y-8 bg-[#FFFBF3]">
        {/* Section 1: Service Usage */}
        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Service Usage</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900">Eligibility:</h3>
              <p className="mt-1">
                Our services are available only to individuals who are legally
                capable of entering into binding contracts.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Account Information:</h3>
              <p className="mt-1">
                You agree to provide accurate, current, and complete details
                during sign-up and while placing orders.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Prohibited Use:</h3>
              <p className="mt-1">
                Misrepresentation of identity, fraudulent activities, or any misuse
                of Milcko’s platform is strictly prohibited and may lead to account
                suspension.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Orders & Payments */}
        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Orders & Payments
          </h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900">Order Confirmation:</h3>
              <p className="mt-1">
                Orders are confirmed only upon successful payment unless otherwise
                agreed in writing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Pricing:</h3>
              <p className="mt-1">
                Product prices are displayed at the time of ordering and may be
                subject to change without prior notice due to seasonal or supply
                variations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Taxes & Charges:</h3>
              <p className="mt-1">
                Applicable taxes, fees, or delivery charges will be clearly stated
                before final checkout.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Delivery */}
        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Delivery</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900">Delivery Time:</h3>
              <p className="mt-1">
                We aim to deliver within the time slots selected at checkout.
                However, delays may occur due to traffic, weather, or unforeseen
                circumstances.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Delivery Address:</h3>
              <p className="mt-1">
                Customers are responsible for providing a complete and accurate
                delivery address. Failed deliveries due to incorrect addresses may
                incur additional charges.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Returns & Refunds */}
        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Returns & Refunds
          </h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900">Policy Coverage:</h3>
              <p className="mt-1">
                Returns and refunds are processed in accordance with our Return &
                Refund Policy.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Eligibility:</h3>
              <p className="mt-1">
                Perishable dairy products are subject to stricter timelines and
                packaging requirements for returns.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Refund Method:</h3>
              <p className="mt-1">
                Approved refunds will be credited to the original payment method
                within the specified timeframe.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Privacy & Data */}
        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Privacy & Data</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900">Data Handling:</h3>
              <p className="mt-1">
                We value your privacy and process personal information in line with
                our Privacy Policy.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Data Sharing:</h3>
              <p className="mt-1">
                Your personal data will not be shared with third parties without
                consent unless required by law or to fulfill an order.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Security:</h3>
              <p className="mt-1">
                Reasonable measures are taken to protect your data from
                unauthorized access.
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: Limitation of Liability */}
        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Limitation of Liability
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Milcko shall not be held responsible for indirect, incidental, or
              consequential damages arising from delays, product availability, or
              misuse of services.
            </p>
            <p>
              Liability, where applicable, will be limited to the amount paid for
              the specific order in question.
            </p>
          </div>
        </div>

        {/* Section 7: Changes to Terms */}
        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Changes to Terms
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              We reserve the right to amend these Terms & Conditions at any time
              to reflect changes in our practices or legal requirements.
            </p>
            <p>
              Updated terms will be posted on our website, and continued use of
              our services after updates implies acceptance of the revised Terms.
            </p>
          </div>
        </div>
      </section>

      {/* Clarification + Footer */}
      <ClarificationSection />
      <Footer />
    </div>
  );
};

export default TermsConditions;
