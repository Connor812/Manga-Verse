const mongoose = require('mongoose');

const { Schema } = mongoose;

const mangaSchema = new Schema({
    mangaId: {
      type: Number
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
    },
    chapters: {
      type: Number,
    },
    description: {
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

  const Manga = mongoose.model('Manga', mangaSchema);

  module.exports = Manga;