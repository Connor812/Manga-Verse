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
    title_japanese: {
      type: String
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
    rank: {
      type: Number
    },
    author: {
      type: String
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