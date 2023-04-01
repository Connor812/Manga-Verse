import React, { useState } from "react";
import Auth from "../utils/auth";
import "../assets/css/profile.css";
import { GET_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Manga_Profile_Card from "../components/Manga_Profile_Card";

const MangaProfile = () => {
  const { loading, data } = useQuery(GET_ME);
  const userData = Auth.loggedIn ? Auth.getProfile() : null;
  return (
    <>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div className="profile-wrapper">
          <div className="SavedManga">
            <h3>Your Favourites Mangas</h3>
              <div className="displayed-card-wrapper">
            {data.me.favManga.map((manga, index) => {
              return <Manga_Profile_Card key={index} manga={manga} isFavourite={true} />;
            })}
            </div>
          </div>

          <div className="FavoritedManga">
            <h3>Your Saved Manga</h3>
              <div className="displayed-card-wrapper">
            {data.me.savedManga.map((manga, index) => {
              return <Manga_Profile_Card key={index} manga={manga} isFavourite={false} />;
            })}
            </div>
          </div>
        </div>

      )}
    </>
  );
};

export default MangaProfile;
