const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("User not found");
  let password = await User.findOne({ password: req.body.password });
  if (!password) return res.status(400).send("incorrect password");
  return res.send("login successful");
});

module.exports = router;
