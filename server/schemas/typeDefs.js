const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    username: String
    firstName: String
    lastName: String
    email: String
    savedAnime: [savedAnime]
  }

  type savedAnime {
    animeId: Int
    title: String
    image: String
    episodes: Int
    description: String
    genres: [genres]
    trailer: String
    duration: String
    rating: String
    rank: String
  }

  type favAnime {
    animeId: Int
    title: String
    image: String
    episodes: Int
    description: String
    genres: [genres]
    trailer: String
    duration: String
    rating: String
    rank: String
  }

  type savedManga {
    mangaId: Int
    title: String
    image: String
    chapters: Int
    description: String
    genres: [genres]
    rating: String
    rank: String
  }

  type favManga {
    mangaId: Int
    title: String
    image: String
    chapters: Int
    description: String
    genres: [genres]
    rating: String
    rank: String
  }

  type genres {
    genreId: Int
    name: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    addUser(username: String!, firstName: String!, lastName: String!, email: String!, password: String!, addFavAnime: String): Auth
    updateUser(username: String!, firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addFavAnime(username: String!, addFavAnime: String!): User
    saveFavAnime(username: String!, saveFavAnime: String!): User
    addFavManga(username: String!, addFavManga: String!): User
    saveFavMangfa(username: String!, saveFavManga: String!): User
  }
`;

module.exports = typeDefs;
