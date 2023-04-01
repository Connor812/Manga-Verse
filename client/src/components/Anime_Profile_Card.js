import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/profile.css";

const Anime_Profile_Card = (props) => {
  console.log(props);
  const anime = {
    animeId: props.anime.mal_id,
    title: props.anime.title,
    title_english: props.anime.title_english,
    title_japanese: props.anime.title_japanese,
    image: props.anime.image,
    episodes: props.anime.episodes,
    description: props.anime.synopsis,
    trailer: props.anime.trailer,
    duration: props.anime.duration,
    rating: props.anime.rating,
    rank: props.anime.rank,
    studios: props.anime.studios,
    genres: props.anime.genres,
  };
  return (
    <div className="col-12 col-xxl-3 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center profile-card-wrapper">
      <div className="profile-card-container">
        <Link className="image-link" to={"/singleAnime"} state={anime}>
          <img
            className="profile-anime-img"
            src={anime.image}
            alt={anime.title}
          />
        </Link>
        <div className="profile-anime-title-container">
          <div className="profile-anime-title">
            {anime.title_english ? anime.title_english : anime.title}
          </div>
          <div className="profile-japanese-title">{anime.title_japanese}</div>

          <button className="profile-anime-delete-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g id="Interface / Trash_Full">
                <path
                  id="Vector"
                  d="M14 10V17M10 10V17M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Anime_Profile_Card;
