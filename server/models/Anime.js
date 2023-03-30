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
    title_japanese: {
      type: String,
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
    rank: {
      type: Number
    },
    rating: {
      type: String
    },
    studios: {
      type: String
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