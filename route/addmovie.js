const express = require("express");
const router = express.Router();
const Movie = require("../models/movieModel");
const { validateMovie } = require("../validate/movies");

router.post("", async (req, res) => {
  const result = validateMovie(req.body);
  if (result.error)
    return res.status(400).send(result.error.details[0].message);
  let movie = await Movie.findOne({ title: req.body.title });
  if (movie) return res.status(400).send("Movie already exists");
  movie = new Movie({
    title: req.body.title,
    gnere: req.body.gnere,
    rate: req.body.rate
  });
  await movie.save();
  res.status(200).send(movie);
});
module.exports = router;
