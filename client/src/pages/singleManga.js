import React from "react";
import { useLocation } from "react-router-dom";
import "../assets/css/single_page.css";

const SingleManga = () => {
  const location = useLocation();
  const manga = location?.state;

  console.log(manga);

  function fromArr(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
      str += arr[i].name;
      str += ", ";
    }

    return str.slice(0, -2);;
  }

  return (
    <div className="single-wrapper">
      <div className="single-content">
        <h2 className="single-title">{manga.title}</h2>
        <h2 className="single-title_japanese">{manga.title_japanese}</h2>

        <img className="single-img" src={manga.image} alt={manga.title} />

        <div className="single-info">
          <p className="single-genres">Genres: {manga.genres.length > 0 ? fromArr(manga.genres) : "-"}</p>

          <p className="single-author">
            Author: <span>{manga.author.length > 0 ? fromArr(manga.author) : "-"}</span>
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
