import Razorpay from "razorpay";
import crypto from "crypto";

/**
 * @desc    Debug route to check Razorpay API keys
 * @route   GET /api/payment/debug
 * @access  Public (⚠️ disable in production)
 */
export const debugKeys = (req, res) => {
  try {
    const keyId = process.env.RAZORPAY_KEY_ID || "Not set";
    const keySecret = process.env.RAZORPAY_KEY_SECRET ? "Present (Hidden)" : "Not set";

    res.json({
      environment: process.env.NODE_ENV || "development",
      razorpayKeys: {
        keyId: keyId.substring(0, 5) + "...",
        keySecret: keySecret,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @desc    Create Razorpay order
 * @route   POST /api/payment/order
 * @access  Private
 */
export const createPaymentOrder = async (req, res) => {
  console.log("Payment order request received:", req.body);
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({ message: "Amount is required" });
    }

    const keyId = process.env.RAZORPAY_KEY_ID || "Not set";
    console.log("Using Razorpay Key ID:", keyId.substring(0, 4) + "...");
    console.log("Key Secret Present:", !!process.env.RAZORPAY_KEY_SECRET);

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID || "rzp_test_your_key_here",
      key_secret: process.env.RAZORPAY_KEY_SECRET || "your_secret_here",
    });

    const options = {
      amount: Math.round(amount * 100), // amount in paise
      currency: "INR",
      receipt: `order_${Date.now()}`,
      payment_capture: 1,
    };

    console.log("Creating order with options:", options);
    const order = await razorpay.orders.create(options);

    res.json(order);
  } catch (error) {
    console.error("Razorpay order creation failed:", error);
    res.status(500).json({
      message: "Razorpay error",
      error: error.message,
      code: error.code || "UNKNOWN",
      stack: process.env.NODE_ENV === "production" ? null : error.stack,
    });
  }
};

/**
 * @desc    Verify Razorpay payment signature
 * @route   POST /api/payment/verify
 * @access  Private
 */
export const verifyPayment = async (req, res) => {
  try {
    console.log("Payment verification request:", req.body);
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const shasum = crypto.createHmac(
      "sha256",
      process.env.RAZORPAY_KEY_SECRET || "your_secret_here"
    );
    shasum.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = shasum.digest("hex");

    if (digest === razorpay_signature) {
      console.log("Payment verification successful");
      res.json({ success: true, message: "Payment verified successfully" });
    } else {
      console.log("Payment verification failed - signature mismatch");
      res.status(400).json({ success: false, message: "Payment verification failed" });
    }
  } catch (error) {
    console.error("Payment verification error:", error);
    res.status(500).json({ message: "Error verifying payment", error: error.message });
  }
};

/**
 * @desc    Simple API test
 * @route   GET /api/payment/test
 * @access  Public
 */
export const testApi = (req, res) => {
  res.json({ message: "Payment API is working" });
};

/**
 * @desc    Test protected API connection
 * @route   POST /api/payment/test-connection
 * @access  Private
 */
export const testConnection = (req, res) => {
  try {
    res.json({
      success: true,
      message: "API connection successful",
      receivedData: req.body,
      user: req.user ? { id: req.user._id } : null,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
