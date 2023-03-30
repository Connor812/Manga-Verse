const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    username: String
    firstName: String
    lastName: String
    email: String
    favAnime: [ID]
    savedAnime: [ID]
    favManga: [ID]
    savedManga: [ID]
  }

  type Anime {
    _id: ID
    animeId: Int
    title: String
    title_japanese: String
    image: String
    episodes: Int
    description: String
    trailer: String
    duration: String
    rating: String
    rank: Int
    studio: String
    genres: [Genres]
  }

  type Manga {
    _id: ID
    mangaId: Int
    title: String
    title_japanese: String
    image: String
    chapters: Int
    description: String
    rank: Int
    author: String
    genres: [Genres]
  }

  type Genres {
    _id: ID
    genreId: Int
    name: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    anime: [Anime]
    manga: [Manga]
    genres: [Genres]
  }

  type Mutation {
    addUser(username: String!, firstName: String!, lastName: String!, email: String!, password: String!, addFavAnime: String): Auth
    updateUser(username: String!, firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth

    # Add Anime
    addAnime(
    animeId: Int!,
    title: String!, 
    title_japanese: String, 
    image: String!, 
    episodes: Int, 
    description: String, 
    trailer: String, 
    duration: String, 
    rating: String, 
    rank: Int,
    studio: String,
    genres: [ID]
    ): Anime

    # Add Manga
    addManga(
      mangaId: Int!, 
      title: String!, 
      title_japanese: String, 
      image: String!, 
      chapters: Int, 
      description: String, 
      rank: Int,
      author: String
      genres: [ID]
      ): Manga

    addGenre(name: String!, genreId: Int!): Genres
    updateFavAnime(username: String!, favAnime: ID!): User
    updateSavedAnime(username: String!, savedAnime: ID!): User
    updateFavManga(username: String!, favManga: ID!): User
    updateSavedManga(username: String!, savedManga: ID!): User
  }
`;

module.exports = typeDefs;
