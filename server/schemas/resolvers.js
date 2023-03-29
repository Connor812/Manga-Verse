const { AuthenticationError } = require('apollo-server-express');
const { User, Anime, Manga, Genres } = require('../models');
const { update } = require('../models/User');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
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

    addAnime: async (parent, anime) => {
      try {
        const newAnime = await Anime.create(anime);
        return newAnime;
      } catch (error) {
        return error
      }
    },
    addManga: async (parent, manga) => {
      try {
        const newManga = await Manga.create(manga);
        return newManga;
      } catch (error) {
        return error
      }
    },
    addGenre: async (parent, genre) => {
      try {
        const newGenre = await Genres.create(genre);
        return newGenre;
      } catch (error) {
        return error;
      }
    },
    updateFavAnime: async (parent, args) => {
      try {
        const updatedFavAnime = await User.findOneAndUpdate(
          { username: args.username },
          { $addToSet: { favAnime: args.favAnime } },
          { new: true }
        )
        return updatedFavAnime;
      } catch (error) {
        return error;
      }
    },
    updateSavedAnime: async (parent, args) => {
      try {
        const updatedSavedAnime = await User.findOneAndUpdate(
          { username: args.username },
          { $addToSet: { savedAnime: args.savedAnime } },
          { new: true }
        )
        return updatedSavedAnime;
      } catch (error) {
        return error;
      }
    },
    updateFavManga: async (parent, args) => {
      try {
        const updatedFavManga = await User.findOneAndUpdate(
          { username: args.username },
          { $addToSet: { favManga: args.favManga } },
          { new: true }
        )
        return updatedFavManga;
      } catch (error) {
        return error
      }
    },
    updateSavedManga: async (parent, args) => {
      try {
        const updateSavedManga = await User.findOneAndUpdate(
          { username: args.username },
          { $addToSet: { savedManga: args.savedManga } },
          { new: true }
        )
        return updateSavedManga;
      } catch (error) {
        return error
      }
    }
  }
}

module.exports = resolvers;
