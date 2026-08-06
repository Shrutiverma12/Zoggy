import { Restaurant } from '../models/Restaurant.js';

export const createRestaurant = async (req, res) => {
  try {
    const { name, address, image, description } = req.body;
    if (!name || !address) {
      return res.status(404).json({ message: 'Please add name and address' });
    }
    const restaurant = Restaurant.create({
      name,
      address,
      image: image,
      description: description,
      ownerId: req.user._id,
    });
    req.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: 'Server error while creating restaurant' });
  }
};

export const getRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.find().populate(
      'ownerId',
      'name email',
    );

    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching restaurant' });
  }
};

export const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id).populate(
      'ownerId',
      'name email',
    );

    return res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching restaurant' });
  }
};
