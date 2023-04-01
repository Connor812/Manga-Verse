const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://65.95.195.133:27017/manga-verse', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
