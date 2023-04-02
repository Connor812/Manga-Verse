import React, { useEffect } from "react";
import Auth from "../utils/auth";
import "../assets/css/profile.css";
import { GET_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Manga_Profile_Card from "../components/Manga_Profile_Card";

const MangaProfile = () => {
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
          <div className="favourite-container">
            <div className="center-title">
             Favourites Mangas
             </div>
              <div className="displayed-card-wrapper">
            {data.me.favManga.map((manga, index) => {
              return <Manga_Profile_Card key={index} manga={manga} isFavourite={true} />;
            })}
            </div>
          </div>

          <div className="saved-container">
            <div className="center-title">
            Your Saved Manga
            </div>
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
