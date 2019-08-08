const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  c_password: String,
  phone: Number
});
module.exports = User = mongoose.model("User", registerSchema);
