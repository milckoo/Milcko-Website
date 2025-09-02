// server.js (or index.js)
// 1. Load environment variables FIRST
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name properly in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from the correct path
dotenv.config({ path: path.join(__dirname, '..', '.env') });

console.log('Environment variables loaded:');
console.log('- PORT:', process.env.PORT);
console.log('- MONGO_URI present:', !!process.env.MONGO_URI);
console.log('- JWT_SECRET present:', !!process.env.JWT_SECRET);
console.log('- RAZORPAY_KEY_ID present:', !!process.env.RAZORPAY_KEY_ID);
console.log('- RAZORPAY_KEY_SECRET present:', !!process.env.RAZORPAY_KEY_SECRET);

// 2. Now import other modules
import cors from 'cors';
import helmet from 'helmet';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import paymentRoutes from './routes/paymentRoutes.js';
import cartRoutes from './routes/cart.js';
import orderRoutes from './routes/orders.js';

// Connect to MongoDB
connectDB();

const app = express();

// Use helmet with modified permissions policy
app.use(
  helmet({
    permissionsPolicy: {
      directives: {
        // Remove 'otp-credentials' and use only supported features
        'geolocation': ['self'],
        'camera': ['self'],
        'microphone': ['self'],
        'payment': ['self'],
      },
    },
  })
);

// --- Middleware ---
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173"], // React (CRA or Vite)
  credentials: true,
}));
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// --- Routes ---
app.use('/api/auth', authRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

// Health check / default route
app.get('/', (req, res) => {
  res.send('✅ API is running...');
});

// --- 404 Handler ---
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// --- PORT ---
const PORT = process.env.PORT || 4500;

// --- Start server ---
app.listen(PORT, () => {
  console.log(`✅ Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});

console.log('Razorpay Keys:', {
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Error handling for Razorpay order creation
app.post('/api/payment/order', async (req, res) => {
  try {
    // ... existing order creation logic ...

  } catch (error) {
    console.error("Razorpay order creation failed:", error);
    res.status(500).json({ error: 'Order creation failed' });
  }
});
