const noticeController = require("./../../Controller/Notice/noticeController");
const express = require("express");
const router = express.Router();

router.route("/:id").delete(noticeController.deleteNotice);

module.exports = router;
