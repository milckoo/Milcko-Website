import React from "react";
import { Link } from "react-router-dom";
import Footer from '../components/Footer';

const ReturnRefundPolicy = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans pt-24">
      {/* Hero Section */}
      <section className="text-center py-10 px-4 bg-gradient-to-r from-green-50 to-yellow-50">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Return & Refund Policy
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600">
          At Milcko, we promise fresh, quality products every time. If something
          isn't right, our simple Return & Refund process ensures it's made
          right quickly.
        </p>
      </section>

      {/* Policy Content */}
      <section className="max-w-5xl mx-auto p-6 space-y-10">
        {/* Eligibility */}
        <div>
          <h2 className="text-2xl font-semibold text-green-700 flex items-center gap-2">
            ✅ Eligibility for Returns
          </h2>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700">
            <li>
              Customers must report a return request within{" "}
              <b>24 hours of receiving</b> the product.
            </li>
            <li>
              Returned products must be unopened, unused, and in their original
              packaging.
            </li>
            <li>
              Perishable items like fresh milk may have special handling rules
              and will be assessed on a case-by-case basis.
            </li>
          </ul>
        </div>

        {/* Non-Returnable Items */}
        <div>
          <h2 className="text-2xl font-semibold text-orange-600">
            🚫 Non-Returnable Items
          </h2>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700">
            <li>
              Any opened or partially consumed dairy products cannot be refunded
              for hygiene and safety reasons.
            </li>
            <li>
              Products reported outside the 24-hour return window will not be
              eligible.
            </li>
            <li>
              Items that have been improperly stored or handled after delivery
              and show signs of damage or spoilage.
            </li>
          </ul>
        </div>

        {/* Refund Process */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600">💳 Refund Process</h2>
          <ol className="list-decimal ml-6 mt-2 space-y-1 text-gray-700">
            <li>
              Contact our support team via email or phone, providing your order
              details and reason for return.
            </li>
            <li>
              Share photos of the product if requested by our team to verify the
              issue.
            </li>
            <li>
              Once approved, your refund will be processed to your original
              payment method within 5-7 business days.
            </li>
            <li>
              Refund timelines may vary depending on your bank or payment
              provider.
            </li>
          </ol>
        </div>

        {/* Replacement */}
        <div>
          <h2 className="text-2xl font-semibold text-purple-600">
            🔄 Replacement Option
          </h2>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700">
            <li>
              For eligible cases, you can request a free replacement instead of
              a refund.
            </li>
            <li>
              Replacement items will be delivered at no extra charge and as
              quickly as possible.
            </li>
            <li>
              If a replacement is not available, the standard refund process
              will apply.
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="text-center py-10 bg-gradient-to-r from-green-100 to-yellow-100 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Need to <span className="text-green-700">Return</span> or Request a{" "}
            <span className="text-yellow-600">Refund?</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            We've made the process quick, fair, and hassle-free. Whether it's a
            product concern or a change of mind, we're here to set things right.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contactus"
              className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
            >
              Request a Return
            </Link>
            <Link
              to="/contactus"
              className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition"
            >
              Contact Support
            </Link>
          </div>
        </div>

        {/* Policies Section - Added Links to Other Policies */}
        <div className="mb-6">
          <h3 className="font-medium text-white mb-4">Policies</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/privacy-policy" className="hover:text-yellow-500">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-conditions" className="hover:text-yellow-500">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/return-policy" className="hover:text-yellow-500">
                Return & Refund Policy
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReturnRefundPolicy;
