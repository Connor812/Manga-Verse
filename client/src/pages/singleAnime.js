import React from "react";
import { useLocation } from "react-router-dom";
import "../assets/css/single_page.css";

const SingleAnime = () => {
  const location = useLocation();
  const anime = location?.state;

  console.log(anime);

  function animeGenres() {
    let str = "";
    for (let i = 0; i < anime.genres.length; i++) {
      str += anime.genres[i].name;
      str += " ";
    }

    return str.toLowerCase();
  }

  let displayTrailer = {};
  function animeTrailer() {
    if (anime.trailer) {
      return (displayTrailer = {
        display: "block",
      });
    } else {
      return (displayTrailer = {
        display: "none",
      });
    }
  }
  animeTrailer();

  return (
    <div className="single-wrapper">
      <div className="single-content">
        <h2 className="single-title">{anime.title}</h2>
        <h2 className="single-title_japanese">{anime.title_japanese}</h2>

        <img className="single-img" src={anime.image} alt={anime.title} />

        <div className="single-info">
          <p className="single-genres">Genres: {animeGenres()}</p>

          <p className="single-rating">
            Rating: {anime.rating ? anime.rating : "-"}
          </p>

          <p className="single-episodes">
            Episodes: {anime.episodes ? anime.episodes : "-"}, duration:{" "}
            {anime.duration ? anime.duration : "-"}
          </p>
        </div>

        <p className="single-description">
          {anime.description
            ? anime.description
            : "Sorry, we don't have description"}
        </p>

        <a href={anime.trailer} style={displayTrailer}>
          <button className="single-button">Watch the trailer</button>
        </a>
      </div>
    </div>
  );
};

export default SingleAnime;
