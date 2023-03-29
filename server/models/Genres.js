const mongoose = require('mongoose');

const { Schema } = mongoose;

const genresSchema = new Schema({
    genreId: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  });

  const Genres = mongoose.model("Genres", genresSchema);

  module.exports = Genres;