// DAta is fetch using the auth token by posting the auth token we can get the data of user from data base
// const loginData = require("./../middleware/loginData");

const loginController = require("./../../Controller/loginController");
const express = require("express");

const logindata = require("./../../Middleware/loginData");

const router = express.Router();
router.route("/").post(logindata, loginController.loginData);
module.exports = router;
