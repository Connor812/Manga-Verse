import React, { useState } from "react";
import Auth from "../utils/auth";
import "../assets/css/profile.css";
import { GET_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";

const AnimeProfile = () => {
  const {loading, data} = useQuery(GET_ME);
  const userData = Auth.loggedIn ? Auth.getProfile() : null;
  return (
	<>
	  {loading ? (
		<h1>loading</h1>
		) : (
	<div>
      <div className="SavedAnime">
        <h3>Your Saved Anime</h3>
		<p>{data.me.savedAnime[0].title}</p>
      </div>
      <div className="FavoritedAnime">
        <h3>Your Favorited Anime</h3>
		<p>{data.me.favAnime[0].title}</p>
		<p></p>
      </div>
	</div>
	  )
	}
	</>
  )};

export default AnimeProfile;
