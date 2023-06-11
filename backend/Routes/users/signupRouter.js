const express = require("express");

const signupController = require("./../../Controller/SignupController");
const { body, validationResult } = require("express-validator");
const router = express.Router();

router
  .route("/", [
    body("name").isLength({ min: 3 }),
    body("email", "Enter a valaid email").isEmail(),
    body("password", "create a strong password").isLength({ min: 5 }),
  ])
  .post(signupController.createUser);

module.exports = router;
