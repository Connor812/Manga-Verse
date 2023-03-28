const db = require('./connection');
const { 
  User,
  FavAnime,
  SavedAnime,
  FavManga,
  SavedManga,
  Genres
} = require('../models');

db.once('open', async () => {

  console.log('products seeded');

  await User.deleteMany();
  await FavAnime.deleteMany();
  await SavedAnime.deleteMany();
  await FavManga.deleteMany();
  await SavedManga.deleteMany();
  await Genres.deleteMany();

// Seed Genres

const genres = await Genres.create({
  genreId: 1,
  name: "Adventure"
});

console.log('Genres have been seeded');

  // Seed Favourite Anime

const favAnime = await FavAnime.create({
  animeId: 2,
  title: 'Berserk',
  image: 'htts://berserk.png',
  episodes: 100,
  description: 'Awesome Anime',
  genres: [genres._id],
  trailer: 'https://berskertrailer.com',
  duration: '24 min long',
  rating: 'best of all time',
  rank: 10
});

console.log('FavAnime have been seeded');

// Seed Saved Anime

const savedAnime = await SavedAnime.create({
  animeId: 2,
  title: 'Berserk',
  image: 'htts://berserk.png',
  episodes: 100,
  description: 'Awesome Anime, saved anime',
  genres: [genres._id],
  trailer: 'https://berskertrailer.com',
  duration: '24 min long',
  rating: 'best of all time',
  rank: 10
});

console.log('SavedAnime has been seeded');

// Seed Fav Manga

const favManga = await FavManga.create({
  animeId: 2,
  title: 'Berserk',
  image: 'htts://berserk.png',
  episodes: 100,
  description: 'Awesome Manga, favManga',
  genres: [genres._id],
  trailer: 'https://berskertrailer.com',
  duration: '24 min long',
  rating: 'best of all time',
  rank: 10
});

console.log('FavManga has been seeded');

// Seed Saved Manga

const savedManga = await SavedManga.create({
  animeId: 2,
    title: 'Berserk',
    image: 'htts://berserk.png',
    episodes: 100,
    description: 'Awesome Manga, saved Manga',
    genres: [genres._id],
    trailer: 'https://berskertrailer.com',
    duration: '24 min long',
    rating: 'best of all time',
    rank: 10
});

console.log('SavedManga has been seeded');

// Seed User Data

  const user = await User.create({
    username: 'Connor',
    firstName: 'Connor',
    lastName: 'Savoy',
    email: 'connor@gmail.com',
    password: 'password123',
    favAnime: [favAnime._id],
    savedAnime: [savedAnime._id],
    favManga: [savedManga._id],
    savedManga: [savedManga._id]
  });

  console.log('users seeded');

  process.exit();
});
