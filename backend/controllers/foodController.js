import { Food } from '../models/Food.js';
import { Restaurant } from '../models/Restaurant.js';

export const getFoods = async (req, res) => {
  const food = Food.fin;
};

export const getFoodByID = async (req, res) => {
  try {
    const filter = req.query.restaurantId
      ? { restaurantId: req.query.restaurantId }
      : {};
    const food = await Food.find(filter).populate(
      'restaurantId',
      'name address image',
    );
    res.send(food);
  } catch (error) {
    return res.status(500).json({
      message: 'Server error while fetching food',
    });
  }
};

export const createFood = async (req, res) => {
  try {
    const { name, price, image, description, restaurantId } = req.body;
    if (!name || !price || !image || !description || !restaurantId) {
      console.log(name, price, image, description, restaurantId, 'hhhh');

      return res.status(400).json({ message: 'Please add proper data' });
    }

    const restaurants = await Restaurant.find();
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found Id no' });
    }
    if (restaurant.ownerId.toString() !== req.user._id.toString()) {
      return res.status(404).json({
        message: 'Not Authorized to add food to this restaurant not matched',
      });
    }
    const food = await Food.create({
      name,
      price,
      image: image || '',
      description: description || '',
      restaurantId,
    });
    const populatedFood = await Food.findById(food._id).populate(
      'restaurantId',
      'name address image',
    );
    return res.status(201).json(populatedFood);
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: 'Server error while creating food',
    });
  }
};

export const updateFood = async (req, res) => {};

export const deleteFood = async (req, res) => {};
