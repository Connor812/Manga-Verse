import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_GENRE = gql`
mutation addGenre(
  $genreId: Int
  $name: String!
) {
  addGenre(
    genreId: $genreId
    name: $name
  )
}
`;

export const ADD_ANIME = gql`
    mutation addAnime(
    $animeId: Int!, 
    $image: String, 
    $title: String!, 
    $title_japanese: String, 
    $episodes: Int, 
    $trailer: String, 
    $description: String, 
    $duration: String, 
    $rank: Int, 
    $genres: [String], 
    $studios: String, 
    $rating: String
    ) {
  addAnime(
  animeId: $animeId, 
  image: $image, 
  title: $title, 
  title_japanese: $title_japanese, 
  episodes: $episodes, 
  trailer: $trailer, 
  description: $description, 
  duration: $duration, 
  rank: $rank, 
  genres: $genres, 
  studios: $studios, 
  rating: $rating
  ) {
    animeId
    image
    title
    title_japanese
    episodes
    trailer
    description
    duration
    rank
    studios
    rating
    genres {
      _id
    }
  }
  }
`;

export const ADD_MANGA = gql`
mutation addManga(
  $mangaId: Int!
  $title: String!
  $title_japanese: String
  $image: String
  $chapters: Int
  $description: String
  $rank: Int
  $author: String
  $genres: [ID]
) {
  addManga(
    mangaId: $mangaId
    title: $title
    title_japanese: $title_japanese
    image: $image 
    chapters: $chapters
    description: $description
    rank: $rank
    author: $author
    genres: $genres
  )
}



`;