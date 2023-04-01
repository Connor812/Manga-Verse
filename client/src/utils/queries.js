import { gql } from "@apollo/client";

// export const GET_ME = gql`
//   query GetMe($id: ID!) {
//     me(_id: $id) {
//       _id
//       username
//       favAnime {
//        _id
//       }
//       savedAnime {
//         _id
//       }
//       favManga {
//         _id
//       }
//       savedManga {
//         _id
//       }
//     }
//   }
// `;

export const GET_ME = gql`
query me {
  me{
    _id
    username
    favAnime {
      _id
      animeId
      description
      duration
      episodes
      image
      rank
      rating
      studios
      title
      title_japanese
      trailer
      genres {
        _id
        name
      }
    }
    savedAnime {
      _id
      animeId
      title
      title_japanese
      image
      episodes
      description
      trailer
      duration
      rating
      rank
      studios
      genres {
        _id
        name
      }
    }
    favManga {
      _id
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
        name
      }
    }
    savedManga {
      _id
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
        name
      }
    }
  }
}
`;
