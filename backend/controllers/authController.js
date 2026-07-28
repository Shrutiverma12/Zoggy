import bcrypt from 'bcrypt';

export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please add all field' });
    }
    if (role != 'customer' && role != 'restuarant') {
      return res.status(400).json({ message: 'Role must be proper' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserActivation.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error while signing up ', error });
  }
};

export const signin = () => {};
