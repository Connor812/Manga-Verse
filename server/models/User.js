const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  
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
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  favAnime: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Anime'
    }
  ],
  savedAnime: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Anime'
    }
  ],
  favManga: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Manga'
    }
  ],
  savedManga: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Manga'
    }
  ],
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
