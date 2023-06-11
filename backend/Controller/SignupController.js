const User = require("./../Models/Users");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "kamrankhot";

// module.exports.createUser = async (req, res) => {
//   const salt = await bcrypt.genSalt(10);
//   const secPass = await bcrypt.hash(req.body.password, salt);
//   console.log(secPass);
//   let success = false;
//   const data = {
//     user: {
//       id: User.id,
//     },
//   };
//   const authToken = jwt.sign(data, JWT_SECRET);

//   try {
//     let user = await User.findOne({ success, email: req.body.email });
//     if (user) {
//       return res
//         .status(400)
//         .json({ success, email: "email is already in used" });
//     }

//     const newUser = await User.create({
//       name: req.body.name,
//       email: req.body.email,
//       password: secPass,
//     });

//     newUser.save();
//     success = true;
//     res.status(200).json({
//       success,
//       authToken,
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: "error in user data",
//       message: err,
//     });
//   }
// };

module.exports.createUser = async (req, res) => {
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    // Check whether the user with this email exists already
    let success = false;
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({
        success,
        error: "Sorry a user with this email already exists",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    user = await User.create({
      userName: req.body.userName,
      password: secPass,
      email: req.body.email,
      flatNo: req.body.flatNo,
      authority: req.body.authority,
      parkingAllot: req.body.parkingAllot,
      parkingUse: req.body.parkingUse,
      userType: req.body.userType,
    });
    const data = {
      user: {
        id: user.id,
      },
    };
    const authtoken = jwt.sign(data, JWT_SECRET);

    // res.json(user)
    success = true;
    res.json({ success, authtoken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
