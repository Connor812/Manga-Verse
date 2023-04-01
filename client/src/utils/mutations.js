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

export const HANDLE_ANIME = gql`
    mutation handleAnime(
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
    $rating: String,
    $isFavourite: Boolean!
    ) {
  handleAnime(
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
  rating: $rating,
  isFavourite: $isFavourite
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

export const HANDLE_MANGA = gql`
    mutation handleManga(
    $mangaId: Int!, 
    $title: String!, 
    $title_japanese: String, 
    $image: String, 
    $chapters: Int, 
    $description: String, 
    $rank: Int, 
    $author: String, 
    $genres: [String], 
    $isFavourite: Boolean!
    ) {
  handleManga(
  mangaId: $mangaId,  
  title: $title, 
  title_japanese: $title_japanese, 
  image: $image,
  chapters: $chapters,  
  description: $description, 
  rank: $rank, 
  author: $author, 
  genres: $genres,
  isFavourite: $isFavourite
  ) {
    mangaId
    title
    title_japanese
    image
    chapters
    description
    rank
    author
    genres {
      _id
    }
  }
  }
`;

export const DELETE = gql`
mutation Delete(
  $AoM: String!,
  $isFavourite: Boolean!,
  $_id: ID!
) {
  Delete(
    AoM: $AoM,
    isFavourite: $isFavourite,
    _id: $_id
  ) {
    username
    firstName
    lastName
    email
    favAnime {
      _id
    }
    savedAnime {
    _id
    }
    favManga {
      _id
    }
    savedManga {
      _id
    }
  }
}
`;
