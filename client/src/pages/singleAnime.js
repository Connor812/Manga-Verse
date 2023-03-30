import React from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/css/single_anime.css';



const SingleAnime = ()  => {
    const location = useLocation();
    const anime = location?.state
    
    console.log(anime);

    function animeGenres() {
      let str = '';
      for (let i = 0; i < anime.genres.length; i++) {
        str += anime.genres[i].name;
        str += ' ';
      }

      return str.toLowerCase();
    }

    let displayTrailer = {};
    function animeTrailer() {
      if (anime.trailer) {
         return displayTrailer = {
          display: "block"
        }
      } else {
        return displayTrailer = {
          display: "none"
        }
      }
    }
    animeTrailer();
}

export default SingleAnime;