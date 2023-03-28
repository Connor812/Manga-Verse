const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

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

const genres = new Schema({
  genreId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
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
