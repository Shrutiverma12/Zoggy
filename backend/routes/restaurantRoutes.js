import express from 'express';
import {
  createRestaurant,
  deleteRestaurant,
  getRestaurant,
  getRestaurantById,
  updateRestaurant,
} from '../controllers/restaurantController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getRestaurant);

router.put('/:id', protect, updateRestaurant);

router.post('/', protect, createRestaurant);

router.get('/:id', protect, getRestaurantById);

router.delete('/:id', protect, deleteRestaurant);

export default router;
