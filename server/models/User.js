const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

// Genre Schema

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

// Saved Anime Schema

const savedAnimeSchema = new Schema({
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
  genres: [genresSchema],
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
  }
});

//  Favourite Anime Schema

const favAnimeSchema = new Schema({
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
  genres: [genresSchema],
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
  }
});

// Saved Manga Schema

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
  genres: [genresSchema],
  rating: {
    type: String
  },
  rank: {
    type: Number
  }
});

// Favourite Manga Schema

const favMangaSchema = new Schema({
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
  genres: [genresSchema],
  rating: {
    type: String
  },
  rank: {
    type: Number
  }
});

// User Schema

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  savedAnime: [savedAnimeSchema],
  favAnime: [favAnimeSchema],
  savedManga: [savedMangaSchema],
  favManga: [favMangaSchema]
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
