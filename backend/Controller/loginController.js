const User = require("./../Models/Users");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "kamrankhot";

module.exports.loginUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(req.body.password, salt);
  console.log(secPass);

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    const pass = user.password;

    if (!user) {
      return res.status(400).json({ error: "invalid login credential" });
    }

    const passwordCompare = await bcrypt.compare(password, pass);
    if (!passwordCompare) {
      success = false;
      return res.status(400).json({ error: "invalid login credential" });
    }

    const data = {
      user: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.status(200).json({
      success,
      authToken,
    });
  } catch (err) {
    res.status(400).json({
      status: "error from login side",
      message: err,
    });
  }
};

// 2) getting user data after login by providing the auth token
module.exports.loginData = async (req, res) => {
  try {
    let status = true;
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    console.log(userId);
    console.log(user);

    res.status(200).json({
      status: true,
      user: user,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: err,
    });
  }
};

// Getting all the notes of the user/
