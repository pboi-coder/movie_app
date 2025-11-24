const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  year: Number,
  rating: Number
});

module.exports = mongoose.model('Movie', MovieSchema);
