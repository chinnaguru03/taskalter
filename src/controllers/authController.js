const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.googleAuthCallback = async (req, res) => {
  const { googleId, email, name } = req.user;

  let user = await User.findOne({ googleId });
  if (!user) {
    user = new User({ googleId, email, name });
    await user.save();
  }

  const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.json({ token });
};