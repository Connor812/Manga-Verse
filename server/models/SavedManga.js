const mongoose = require('mongoose');

const { Schema } = mongoose;

const savedMangaSchema = new Schema({
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

const SavedManga = mongoose.model('SavedManga', savedMangaSchema);

module.exports = SavedManga;