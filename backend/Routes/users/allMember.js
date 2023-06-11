const allMember = require("./../../Controller/allMember");
const express = require("express");
const router = express.Router();

router.route("/").get(allMember.getAllMember);

module.exports = router;
