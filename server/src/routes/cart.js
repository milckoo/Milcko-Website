import express from 'express';
import { 
  getCart, 
  addCartItem, 
  updateCartItem, 
  removeCartItem,
  clearCart 
} from '../controllers/cartController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(protect, getCart)
  .post(protect, addCartItem)
  .delete(protect, clearCart);

router.route('/:id')
  .put(protect, updateCartItem)
  .delete(protect, removeCartItem);

export default router;