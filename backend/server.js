import express from 'express';
import connectDB from './config/dbConfig.js';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use(cors());
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  connectDB();
});
