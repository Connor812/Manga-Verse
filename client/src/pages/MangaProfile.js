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
        <div>
          <div className="SavedManga">
            <h3>Your To-Read List</h3>
			 {data.me.favManga.map((manga, index) => {
              return <Manga_Profile_Card key={index} manga={manga} isFavourite={false} />;
            })}
          </div>
          <div className="FavoritedManga">
            <h3>Your Favorited Manga</h3>
            {data.me.savedManga.map((manga, index) => {
              return <Manga_Profile_Card key={index} manga={manga} isFavourite={true} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default MangaProfile;
