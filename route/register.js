const express = require("express");
const router = express.Router();
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
  await user.save();
  res.status(200).send(user);
});
module.exports = router;
