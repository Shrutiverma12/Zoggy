import express from 'express';
import connectDB from './config/dbConfig.js';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import restaurantRoutes from './routes/restaurantRoutes.js';
import foodRoutes from './routes/foodRoutes.js';
import cors from 'cors';

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use(cors());
app.use('/api/auth', authRoutes);

app.use('/api/restaurant', restaurantRoutes);

app.use('/api/food', foodRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  connectDB();
});
