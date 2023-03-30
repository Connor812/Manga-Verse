import React, { useState } from 'react';
import Auth from '../utils/auth';
import '../assets/css/profile.css';

const AnimeProfile = () => {
	return (
		<div>
		<div className='SavedAnime'>
			<h3>Your Saved Anime</h3>
		</div>
		<div className='FavoritedAnime'>
			<h3>Your Favorited Anime</h3>
		</div>
		</div>
	)
}

export default AnimeProfile;