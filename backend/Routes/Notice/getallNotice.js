const noticeController = require("./../../Controller/Notice/noticeController");
const express = require("express");
const router = express.Router();

router.route("/").get(noticeController.getAllNotice);

module.exports = router;
