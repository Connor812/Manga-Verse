import React, { useEffect } from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import "../assets/css/profile.css";
import { GET_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Anime_Profile_Card from "../components/Anime_Profile_Card";

const AnimeProfile = () => {
  const { loading, data, refetch } = useQuery(GET_ME);
  const userData = Auth.loggedIn ? Auth.getProfile() : null;
  
  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div className="profile-wrapper">
          <div className="FavoritedAnime">
            <div className="displayed-card-wrapper">
            <h3>Your Favorited Anime</h3>
            {loading ? 'Loading' : data.me.favAnime.map((anime, index) => { return <Anime_Profile_Card key={index} anime={anime} isFavourite={true} /> })}
            </div>
          </div>
          <div className="SavedAnime">
            <h3>Your Watchlist Anime</h3>
              <div className="displayed-card-wrapper">
            {loading ? 'Loading' : data.me.savedAnime.map((anime, index) => { return <Anime_Profile_Card key={index} anime={anime} isFavourite={false} /> })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AnimeProfile;
