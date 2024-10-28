const User = require('../models/User');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUser = async (req, res) => {
  const { personalId } = req.params;

  try {
    const user = await User.findOne({ personalId });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createUser = async (req, res) => {
  const {
    personalId,
    firstName,
    lastName,
    email,
    address,
    phone,
    education,
    experience,
    skills,
  } = req.body;

  try {
    const newUser = new User({
      personalId,
      firstName,
      lastName,
      email,
      address,
      phone,
      education,
      experience,
      skills,
    });

    const createdUser = await newUser.save();
    res.status(201).json(createdUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  const { personalId } = req.params;
  const updateData = req.body;

  try {
    const updatedUser = await User.findOneAndUpdate(
      { personalId },
      updateData,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  const { personalId } = req.params;

  try {
    const deletedUser = await User.findOneAndDelete({ personalId });

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
