const mongoose = require('mongoose');

const { Schema } = mongoose;

const animeSchema = new Schema({
    animeId: {
      type: Number
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
    },
    episodes: {
      type: Number,
    },
    description: {
      type: String
    },
    trailer: {
      type: String
    },
    duration: {
      type: String
    },
    rating: {
      type: String
    },
    rank: {
      type: Number
    },
    genres: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Genres'
        }
    ]
  });

  const Anime = mongoose.model('Anime', animeSchema);

  module.exports = Anime;