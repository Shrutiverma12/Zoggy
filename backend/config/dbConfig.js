import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      'mongodb://localhost:27017/food/foodApp',
    );
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.log('MongoDB connection failed');
  }
};

export default connectDB;
