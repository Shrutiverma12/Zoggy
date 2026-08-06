import express from 'express';
import {
  createRestaurant,
  getRestaurant,
  getRestaurantById,
} from '../controllers/restaurantController.js';

const router = express.Router();

router.get('/', getRestaurant);

router.get('/my', () => {});

router.post('/', createRestaurant);

router.get('/:id', getRestaurantById);

router.delete('/:id', () => {});

export default router;
