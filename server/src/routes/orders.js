import express from 'express';
import { 
  createOrder, 
  getOrders, 
  getOrderById,
  updateOrderStatus,
  updateOrderPayment 
} from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .post(protect, createOrder)
  .get(protect, getOrders);

router.route('/:id')
  .get(protect, getOrderById)
  .put(protect, admin, updateOrderStatus);

router.route('/:id/pay')
  .put(protect, updateOrderPayment);

export default router;