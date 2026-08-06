import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
dotenv.config();
// import Food from '../models/Food.js';
import connectDB from '../config/dbConfig.js';
import { Restaurant } from '../models/Restaurant.js';
import { User } from '../models/User.js';

const seedDatabase = async () => {
  try {
    await connectDB();
    // await Food.deleteMany();
    await Restaurant.deleteMany();
    let owner = await User.findOne({ email: 'spicekitchen@zwiggy.com' });
    if (!owner) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash('123456', salt);

      owner = await User.create({
        name: 'Spice Kitchen Owner',
        email: 'spicekitchen@zwiggy.com',
        password: hashedPassword,
        role: 'restaurant',
      });
    }
    const restaurent = await Restaurant.insertMany([
      {
        name: 'Spice Kitchen',
        ownerId: owner._id,
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
        description:
          'A cozy restaurant serving delicious Indian and North Indian cuisine.',
        address: 'Civil Lines, Prayagraj, Uttar Pradesh',
      },
      {
        name: 'Tandoori House',
        ownerId: owner._id,
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9',
        description:
          'Enjoy authentic tandoori dishes, rich curries, and flavorful Indian meals.',
        address: 'MG Road, Lucknow, Uttar Pradesh',
      },
      {
        name: 'Urban Bites',
        ownerId: owner._id,
        image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f',
        description:
          'A modern food spot offering burgers, wraps, snacks, and refreshing drinks.',
        address: 'Hazratganj, Lucknow, Uttar Pradesh',
      },
      {
        name: 'Royal Thali',
        ownerId: owner._id,
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d',
        description:
          'Traditional Indian thalis packed with authentic flavors and homemade-style dishes.',
        address: 'Boring Road, Patna, Bihar',
      },
      {
        name: 'Food Junction',
        ownerId: owner._id,
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
        description:
          'A family-friendly restaurant serving a variety of tasty meals for everyone.',
        address: 'Civil Lines, Kanpur, Uttar Pradesh',
      },
    ]);
    await Food.insertMany([
      {
        name: 'Butter Chicken',
        price: 299,
        restaurantId: restaurants[0]._id,
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398',
        description:
          'Tender chicken cooked in a rich, creamy tomato and butter gravy.',
      },
      {
        name: 'Paneer Tikka',
        price: 249,
        restaurantId: restaurants[0]._id,
        image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8',
        description:
          'Soft paneer cubes marinated with spices and grilled to perfection.',
      },
      {
        name: 'Masala Dosa',
        price: 149,
        restaurantId: restaurants[0]._id,
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc',
        description:
          'Crispy South Indian dosa served with flavorful potato masala and chutneys.',
      },
      {
        name: 'Chicken Biryani',
        price: 279,
        restaurantId: restaurants[0]._id,
        image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c',
        description:
          'Fragrant basmati rice cooked with tender chicken and aromatic Indian spices.',
      },
      {
        name: 'Veg Biryani',
        price: 219,
        restaurantId: restaurants[0]._id,
        image: 'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833',
        description:
          'Aromatic basmati rice cooked with fresh vegetables and flavorful spices.',
      },
      {
        name: 'Chole Bhature',
        price: 169,
        restaurantId: restaurants[0]._id,
        image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027',
        description:
          'Spicy chickpea curry served with soft and fluffy deep-fried bhature.',
      },
      {
        name: 'Margherita Pizza',
        price: 249,
        restaurantId: restaurants[0]._id,
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
        description:
          'Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil.',
      },
      {
        name: 'Veg Burger',
        price: 159,
        restaurantId: restaurants[0]._id,
        image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360',
        description:
          'Crispy vegetable patty served in a toasted bun with fresh vegetables and sauces.',
      },
      {
        name: 'French Fries',
        price: 99,
        restaurantId: restaurants[0]._id,
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877',
        description:
          'Crispy golden potato fries seasoned with a delicious blend of spices.',
      },
      {
        name: 'Gulab Jamun',
        price: 89,
        restaurantId: restaurants[0]._id,
        image: 'https://images.unsplash.com/photo-1601303516534-2b7b5a0a4f5b',
        description:
          'Soft and delicious milk-solid dumplings soaked in warm sugar syrup.',
      },
    ]);
    console.log('Sample restaurants and foods added successfully');
    process.exit(0);
  } catch (error) {
    console.log('Saed error', error.message);
    process.exit(1);
  }
};

seedDatabase();
