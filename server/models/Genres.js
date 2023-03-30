const mongoose = require('mongoose');

const { Schema } = mongoose;

const genresSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true
    }
  });

  const Genres = mongoose.model("Genres", genresSchema);

  module.exports = Genres;