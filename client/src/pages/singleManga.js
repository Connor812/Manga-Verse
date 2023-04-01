import React from "react";
import { useLocation } from "react-router-dom";
import "../assets/css/single_page.css";

const SingleManga = () => {
  const location = useLocation();
  const manga = location?.state;

  console.log(manga);

  return (
    <div className="single-wrapper">
      <div className="single-content">
        <h2 className="single-title">{manga.title_english ? manga.title_english : manga.title}</h2>
        <h2 className="single-title_japanese">{manga.title_japanese}</h2>

        <img className="single-img" src={manga.image} alt={manga.title} />

        <div className="single-info">
          <p className="single-genres">Genres: {manga.genres.map((genre, index) => {
            return index + 1 < manga.genres.length ? genre.name + ', ' : genre.name;
          })}</p>

          <p className="single-author">
            Author: <span>{manga.author[0].name ? manga.author[0].name  : "-"}</span>
          </p>

          <p className="single-chapters">
            Chapters: {manga.chapters ? manga.chapters : "-"}
          </p>
        </div>

        <p className="single-description">
          {manga.description
            ? manga.description
            : "Sorry, we don't have description"}
        </p>

      </div>
    </div>
  );
};

export default SingleManga;
