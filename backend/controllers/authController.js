import bcrypt from 'bcrypt';
import { User } from '../models/User.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please add all field' });
    }
    if (role != 'customer' && role != 'restaurant') {
      return res.status(400).json({ message: 'Role must be proper' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    res
      .status(200)
      .json({ message: 'User registered successfully', users: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error while signing up ', error });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res.status(404).json({ message: 'Invalid Credential' });
    }
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1hr' },
    );
    return res.status(200).json({
      message: 'Login Successful',
      user: { id: user._id, name: user.name, role: user.role },
      token,
    });
  } catch (error) {
    console.log(error);
  }
};
