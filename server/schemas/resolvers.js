const { AuthenticationError } = require('apollo-server-express');
const { User, Anime, Manga, Genres } = require('../models');
const { update } = require('../models/User');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    me: async (parent, arg, context) => {
      if (context.user) {
        const user = context
        const userData = await User.findById(user.user._id)
          .populate({
            path: 'favAnime',
            populate: {
              path: 'genres',
              model: 'Genres',
            },
          })
          .populate({
            path: 'savedAnime',
            populate: {
              path: 'genres',
              model: 'Genres'
            }
          })
          .populate({
            path: 'favManga',
            populate: {
              path: 'genres',
              model: 'Genres'
            }
          })
          .populate({
            path: 'savedManga',
            populate: {
              path: 'genres',
              model: 'Genres'
            }
          })
          .exec();


        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    user: async (parent, arg) => {
      const userData = await User.findById(arg._id)
        .populate({
          path: 'favAnime',
          populate: {
            path: 'genres',
            model: 'Genres',
          },
        })
        .populate({
          path: 'savedAnime',
          populate: {
            path: 'genres',
            model: 'Genres'
          }
        })
        .populate({
          path: 'favManga',
          populate: {
            path: 'genres',
            model: 'Genres'
          }
        })
        .populate({
          path: 'savedManga',
          populate: {
            path: 'genres',
            model: 'Genres'
          }
        })
        .exec();

      return userData;
    },

    anime: async (parent) => {
      try {
        const anime = await Anime.find({});
        return anime;
      } catch (error) {
        return error;
      }
    },
    manga: async (parent) => {
      try {
        const manga = await Manga.find({});
        return manga;
      } catch (error) {
        return error;
      }
    },
    genres: async (parent) => {
      try {
        const genres = await Genres.find({})
        return genres
      } catch (error) {
        return error
      }
    }
    // checkout: async (parent, args, context) => {
    //   const url = new URL(context.headers.referer).origin;
    //   const order = new Order({ products: args.products });
    //   const line_items = [];

    //   const { products } = await order.populate('products');

    //   for (let i = 0; i < products.length; i++) {
    //     const product = await stripe.products.create({
    //       name: products[i].name,
    //       description: products[i].description,
    //       images: [`${url}/images/${products[i].image}`]
    //     });

    //     const price = await stripe.prices.create({
    //       product: product.id,
    //       unit_amount: products[i].price * 100,
    //       currency: 'usd',
    //     });

    //     line_items.push({
    //       price: price.id,
    //       quantity: 1
    //     });
    //   }

    //   const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ['card'],
    //     line_items,
    //     mode: 'payment',
    //     success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    //     cancel_url: `${url}/`
    //   });

    //   return { session: session.id };
    // }
  },

  Mutation: {
    addUser: async (parent, args) => {
      console.log(args)
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      console.log('logged In')
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    handleAnime: async (parent, anime, context) => {
      if (context.user) {

        let isFavourite = anime.isFavourite;
        
        const username = context.user.username;

        // AnimeDB ? use anime : Create new Anime

        const animeDB = await Anime.findOne({ animeId: anime.animeId });
        console.log(username);
        if (animeDB) {
          console.log('existing anime')
          try {
            const updatedFavAnime = await User.findOneAndUpdate(
              { username: username },
              isFavourite
                ? { $addToSet: { favAnime: animeDB._id } }
                : { $addToSet: { savedAnime: animeDB._id } },
              { new: true }
            )

            return animeDB;
          } catch (error) {
            return error;
          }
        } else {
          console.log('new Anime')
          let genresId = [];

          if (anime.genres.length > 0) {
            genresId = await Promise.all(anime.genres.map(async (genreName) => {
              try {
                const genre = await Genres.findOne({ name: genreName });
                return genre._id;
              } catch (err) {
                console.log('error');
              }
            }));

            anime.genres = genresId;
          } else {
            anime.genres = []
          }

          try {
            delete anime.isFavourite;
            const newAnime = await Anime.create(anime);
            try {
              await User.findOneAndUpdate(
                { username: username },
                isFavourite
                  ? { $addToSet: { favAnime: newAnime._id } }
                  : { $addToSet: { savedAnime: newAnime._id } },
                { new: true }
              )
              return newAnime;
            } catch (error) {
              return error;
            }
          } catch (error) {
            return error
          }
        }
      }

      throw new AuthenticationError('Not logged in');

    },

    handleManga: async (parent, manga, context) => {
      if (context.user) {

        let isFavourite = manga.isFavourite;

        const username = context.user.username;

        // MangaDB ? use anime : Create new Manga

        const mangaDB = await Manga.findOne({ mangaId: manga.mangaId });
        console.log(username);
        if (mangaDB) {
          console.log('existing manga')
          try {
            const updatedFavManga = await User.findOneAndUpdate(
              { username: username },
              isFavourite
                ? { $addToSet: { favManga: mangaDB._id } }
                : { $addToSet: { savedManga: mangaDB._id } },
              { new: true }
            )

            return mangaDB;
          } catch (error) {
            return error;
          }
        } else {
          console.log('new Manga')
          let genresId = [];

          if (manga.genres.length > 0) {
            genresId = await Promise.all(manga.genres.map(async (genreName) => {
              try {
                const genre = await Genres.findOne({ name: genreName });
                return genre._id;
              } catch (err) {
                console.log('error');
              }
            }));

            manga.genres = genresId;
          } else {
            manga.genres = []
          }

          try {
            delete manga.isFavourite;
            const newManga = await Manga.create(manga);
            try {
              await User.findOneAndUpdate(
                { username: username },
                isFavourite
                  ? { $addToSet: { favManga: newManga._id } }
                  : { $addToSet: { savedManga: newManga._id } },
                { new: true }
              )
              return newManga;
            } catch (error) {
              return error;
            }
          } catch (error) {
            return error
          }
        }
      }

      throw new AuthenticationError('Not logged in');

    },

    addGenre: async (parent, genre) => {
      try {
        const newGenre = await Genres.create(genre);
        return newGenre;
      } catch (error) {
        return error;
      }
    },
    Delete: async (parent, args, context) => {
      if (context.user) {
        const AoM = args.AoM;
        const isFavourite = args.isFavourite;
        const username = context.user.username;
        const _id = args._id;
        console.log(AoM)
        console.log(isFavourite)
        console.log(username)
        console.log(_id)

        if (AoM === 'anime') {
          try {
            const updatedUser = await User.findOneAndUpdate(
              { username: username },
              isFavourite
                ? { $pull: { favAnime: _id } }
                : { $pull: { savedAnime: _id } },
              { new: true }
            )
            console.log(updatedUser);
            return updatedUser;
          } catch (err) {
            return err
          }
        } else if (AoM === 'manga') {
          try {
            const updatedUser = await User.findOneAndUpdate(
              { username: username },
              isFavourite
                ? { $pull: { favManga: _id } }
                : { $pull: { savedManga: _id } },
              { new: true }
            )
            console.log(updatedUser)
            return updatedUser;
          } catch (err) {
            return err;
          }
        }
      } else {
        throw new AuthenticationError('Not logged in');
      }

    }
  }
}

module.exports = resolvers;
