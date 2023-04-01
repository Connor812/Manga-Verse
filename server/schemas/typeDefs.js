const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    username: String
    firstName: String
    lastName: String
    email: String
    favAnime: [GetAnime]
    savedAnime: [GetAnime]
    favManga: [GetManga]
    savedManga: [GetManga]
  }

  type DeleteUser {
    AoM: String
    isFavourite: Boolean
    _id: ID
    username: String
    firstName: String
    lastName: String
    email: String
    favAnime: [GetAnime]
    savedAnime: [GetAnime]
    favManga: [GetManga]
    savedManga: [GetManga]
  }

  type Anime {
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
    studios: String
    genres: [Genres]
  }

  type GetAnime {
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
    studios: String
    genres: [Genres]
  }

  type Manga {
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

  type GetManga {
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
    name: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    user(_id: ID!): User
    anime: [Anime]
    manga: [Manga]
    genres: [Genres]
  }

  type Mutation {
    addUser(username: String!, firstName: String!, lastName: String!, email: String!, password: String!, addFavAnime: String): Auth
    updateUser(username: String!, firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth

    # Handle Anime
    handleAnime(
    animeId: Int!,
    title: String!, 
    title_japanese: String, 
    image: String, 
    episodes: Int, 
    description: String, 
    trailer: String, 
    duration: String, 
    rating: String, 
    rank: Int,
    studios: String,
    genres: [String],
    isFavourite: Boolean!
    ): Anime

    # Handle Manga
    handleManga(
      mangaId: Int!, 
      title: String!, 
      title_japanese: String, 
      image: String, 
      chapters: Int, 
      description: String, 
      rank: Int,
      author: String,
      genres: [String]
      isFavourite: Boolean!
      ): Manga

    addGenre(name: String!): Genres
    Delete(AoM: String!, isFavourite: Boolean!, _id: ID!): DeleteUser
  }
`;

module.exports = typeDefs;
