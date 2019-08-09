const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const { validateUser } = require("../validate/user");

router.post("", async (req, res) => {
  const result = validateUser(req.body);
  if (result.error)
    return res.status(400).send(result.error.details[0].message);
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("Username already exists");

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    c_password: req.body.c_password,
    phone: req.body.phone
  });
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  user.c_password = user.password;

  await user.save();
  const token = jwt.sign({ _id: user._id }, "jwtPrivateKey");
  res.header("x-auth-token", token).send(user.name);
});
module.exports = router;
