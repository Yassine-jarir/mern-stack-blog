const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");
const userModel = require("../models/userModel.js");

const signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    // exists
    const exists = await userModel.findOne({ username });
    if (exists) {
      return res.status(400).json({ error: "user already exist" });
    }
    // strong password
    if (!validator.isStrongPassword(password)) {
      return res
        .status(400)
        .json({ error: "please enter a strong password Exemple : aaaAAA1?" });
    }

    // hash password
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await userModel.create({ username, password: hashedPassword });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

// login
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username });
    // check if the user
    if (!user) {
      return res.status(400).json({ error: "user not found. please singup" });
    }
    // check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "password not valid" });
    }
    // generate a token
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
    res.status(200).json({ user, token });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  login,
  signup,
};
