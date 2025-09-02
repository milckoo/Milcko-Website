import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  debugKeys,
  createPaymentOrder,
  verifyPayment,
  testApi,
  testConnection,
} from "../controllers/paymentController.js";

const router = express.Router();

// Debug route
router.get("/debug", debugKeys);

// Payment routes
router.post("/order", protect, createPaymentOrder);
router.post("/verify", protect, verifyPayment);

// Test routes
router.get("/test", testApi);
router.post("/test-connection", protect, testConnection);

export default router;
