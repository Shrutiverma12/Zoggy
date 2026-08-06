import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Not authorized, no token' });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decode.id).select('-password');
    if (!req.user) {
      return res.status(401).json({ message: 'Not authrized, user not found' });
    }

    next();
  } catch (error) {
    console.error('Auth middleware error', error.message);
    resizeBy.status(401).json({ message: 'Not authrized, token failed' });
  }
};

export default protect;
