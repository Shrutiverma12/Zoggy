import express from 'express';
import {
  createFood,
  deleteFood,
  getFoodByID,
  getFoods,
  updateFood,
} from '../controllers/foodController.js';
import protect from '../middleware/authMiddleware.js';

const route = express.Router();

route.get('/', protect, getFoods);

route.get('/:id', protect, getFoodByID);

route.post('/', protect, createFood);

route.put('/:id', updateFood);

route.delete('/:id', deleteFood);

export default route;
