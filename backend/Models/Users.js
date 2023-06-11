const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: false,
  },
  flatNo: {
    type: Number,
    required: true,
    unique: true,
  },
  authority: {
    type: String,
    required: true,
  },
  parkingAllot: {
    type: Number,
    required: true,
  },
  parkingUse: {
    type: Number,
    required: true,
  },
  userType: {
    type: String,
  },
});

module.exports = mongoose.model("Users", userSchema);
