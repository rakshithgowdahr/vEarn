const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  gnere: String,
  rate: Number
});
module.exports = Movie = mongoose.model("Movie", movieSchema);
