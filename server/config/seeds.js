const db = require('./connection');
const { 
  User,
  Anime,
  Manga,
  Genres
} = require('../models');

const genreData = require('../../client/src/assets/genres_info/genres.json');

db.once('open', async () => {

  console.log('products seeded');

  await User.deleteMany();
  await Anime.deleteMany();
  await Manga.deleteMany();
  await Genres.deleteMany();

// Seed Genres

const genres = await Genres.insertMany(genreData);

console.log('Genres have been seeded');

  // Seed Favourite Anime

const anime = await Anime.create({
  animeId: 2,
  title: 'Berserk',
  title_japanese: 'ベルセルク',
  image: 'htts://berserk.png',
  episodes: 100,
  description: 'Awesome Anime',
  trailer: 'https://berskertrailer.com',
  duration: '24 min long',
  rating: 'best of all time',
  rank: 10,
  studios: 'mappa',
  genres: [genres._id],
});

console.log('Anime have been seeded');

// Seed Fav Manga

const manga = await Manga.create({
  mangaId: 2,
  title: 'Berserk',
  title_japanese: 'ベルセルク',
  image: 'htts://berserk.png',
  chapters: 100,
  description: 'Awesome Manga, favManga',
  rank: 10,
  author: 'Connor',
  genres: [genres._id],
});

console.log('Manga has been seeded');

// Seed User Data

  const user = await User.create({
    username: 'Connor',
    firstName: 'Connor',
    lastName: 'Savoy',
    email: 'connor@gmail.com',
    password: 'password123',
    favAnime: [anime._id],
    savedAnime: [anime._id],
    favManga: [manga._id],
    savedManga: [manga._id]
  });

  console.log('Users seeded');

  process.exit();
});
