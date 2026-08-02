import { text } from 'express';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    role: {
      type: String,
      required: true,
      enum: ['customer', 'restaurant'],
    },
  },
  { timestamps: true },
);

export const User = mongoose.model('User', userSchema);
