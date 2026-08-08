import { Food } from '../models/Food.js';
import { Restaurant } from '../models/Restaurant.js';

export const getFoods = async (req, res) => {
  try {
    const food = await Food.find().populate(
      'restaurantId',
      'name address image',
    );
    res.json(food);
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching food' });
  }
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

export const updateFood = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, price, image, description, restaurantId } = req.body;
    const food = await Food.findByIdAndUpdate(id, {
      name: name ?? req.food.name,
      price: price ?? req.food.price,
      image: image ?? req.food.image,
      description: description ?? req.food.description,
    }).populate('restaurantId', 'name address image');
    res.send({ message: 'Food updated successfully', food: food });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Server error while deleting food',
    });
  }
};

export const deleteFood = async (req, res) => {
  try {
    const id = req.params.id;
    await Food.findByIdAndDelete(id);
    return res.status(204).json({ message: 'Food delete successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Server error while deleting food',
    });
  }
};
