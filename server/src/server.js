// server.js (or index.js)
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// --- Middleware ---
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173"], // React (CRA or Vite)
  credentials: true,
}));
app.use(express.json()); // Parse JSON bodies

// --- Routes ---
app.use('/api/auth', authRoutes);

// Health check / default route
app.get('/', (req, res) => {
  res.send('✅ API is running...');
});

// --- 404 Handler ---
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route not found - ${req.originalUrl}`,
  });
});

// --- Global Error Handler ---
app.use((err, req, res, next) => {
  console.error(`❌ Error: ${err.message}`);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Server Error',
  });
});

// --- PORT ---
const PORT = process.env.PORT || 4500;

// --- Start server ---
app.listen(PORT, () => {
  console.log(`✅ Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
