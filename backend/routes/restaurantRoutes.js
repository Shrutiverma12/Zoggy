import express from 'express';
import {
  createRestaurant,
  getRestaurant,
} from '../controllers/restaurantController.js';

const router = express.Router();

router.get('/', getRestaurant);

router.get('/my', () => {});

router.post('/', createRestaurant);

router.put('/:id', () => {});

router.delete('/:id', () => {});

export default router;
