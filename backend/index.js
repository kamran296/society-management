const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// APP.js ////
const signupRouter = require("./Routes/users/signupRouter");
const loginRouter = require("./Routes/users/loginRouter");
const loginData = require("./Routes/users/loginDataRouter");
const allRouter = require("./Routes/users/allMember");
const noticeRouter = require("./Routes/Notice/noticeRouter");
const allNoticeRouter = require("./Routes/Notice/getallNotice");
const deleteNoticeRouter = require("./Routes/Notice/deleteNotice");

app.use(express.urlencoded({ extended: true }));
// a;

app.use("/api/v1/signup", signupRouter);
app.use("/api/v1/login", loginRouter);
app.use("/api/v1/loginData", loginData);
app.use("/api/v1/getallMember", allRouter);
app.use("/api/v1/notice", noticeRouter);
app.use("/api/v1/getallNotice", allNoticeRouter);
app.use("/api/v1/deleteNotice", deleteNoticeRouter);

const db = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);
mongoose
  .connect(db, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log("Database connected successfully!!");
  })
  .catch((err) => {
    console.log("error connecting database", err);
  });

const port = process.env.PORT || 8000;
app.listen(5000, () => {
  console.log(`App running on port ${port}...`);
});
