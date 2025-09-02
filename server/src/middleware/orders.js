import Order from '../models/Order.js';

// Middleware to check if the order exists and attach it to req.order
export const findOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    req.order = order;
    next();
  } catch (error) {
    res.status(500).json({ message: 'Error finding order', error: error.message });
  }
};

// Middleware to check if the user is the owner of the order or an admin
export const isOrderOwnerOrAdmin = (req, res, next) => {
  if (
    req.user &&
    (req.user.isAdmin || req.order.user.toString() === req.user._id.toString())
  ) {
    next();
  } else {
    res.status(403).json({ message: 'Not authorized to access this order' });
  }
};

// Middleware to check if the order is not already paid
export const isOrderNotPaid = (req, res, next) => {
  if (!req.order.isPaid) {
    next();
  } else {
    res.status(400).json({ message: 'Order is already paid' });
  }
};

// Middleware to check if the order is not already delivered
export const isOrderNotDelivered = (req, res, next) => {
  if (!req.order.isDelivered) {
    next();
  } else {
   res.status(400).json({ message: 'Order is already delivered' });
  }
};