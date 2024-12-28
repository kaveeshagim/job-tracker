const User = require("../models/User");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({ user, token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.status(200).json({ user, token });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { registerUser, loginUser };
