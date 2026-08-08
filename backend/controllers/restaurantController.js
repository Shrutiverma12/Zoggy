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

export const deleteRestaurant = async (req, res) => {
  try {
    const id = req.params.id;
    await Restaurant.findByIdAndDelete(id);
    res.status(204).json({ message: 'Restaurant remove successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error while deleting restaurant' });
  }
};

export const updateRestaurant = async (req, res) => {
  try {
    const { name, address, image, description } = req.body;
    const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, {
      name: name ?? req.restaurant.name,
      address: address ?? req.restaurant.address,
      image: image ?? req.restaurant.image,
      description: description ?? req.restaurant.description,
    });
    console.log('res', restaurant);

    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: 'Server error while updating restaurant' });
  }
};
