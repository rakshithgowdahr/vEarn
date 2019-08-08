const express = require("express");
const router = express.Router();
const Movie = require("../models/movieModel");

router.get("", async (req, res) => {
  let type = req.query.gnere;
  if (type == "all") return res.status(200).send(await Movie.find());
  const movies = await Movie.find({ gnere: type });
  if (!movies) return res.status(404).send("not found");
  return res.status(200).send(movies);
});
module.exports = router;
