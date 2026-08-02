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
    console.log('Sample restaurants and foods added successfully');
    process.exit(0);
  } catch (error) {
    console.log('Saed error', error.message);
    process.exit(1);
  }
};

seedDatabase();
