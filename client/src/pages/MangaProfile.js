import React, { useState } from 'react';
import Auth from '../utils/auth';
import '../assets/css/profile.css';
import { GET_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';

const MangaProfile = () => {
	const {loading, data} = useQuery(GET_ME);
 	const userData = Auth.loggedIn ? Auth.getProfile() : null;
	return (
		<>
		{loading ? (
		  <h1>loading</h1>
		  ) : (
	  <div>
		<div className="SavedManga">
		  <h3>Your To-Read List</h3>
		  <p>{data.me.savedManga[0].title}</p>
		</div>
		<div className="FavoritedManga">
		  <h3>Your Favorited Manga</h3>
		  <p>{data.me.favManga[0].title}</p>
		  <p></p>
		</div>
	  </div>
		)
	  }
	  </>
)};

export default MangaProfile;