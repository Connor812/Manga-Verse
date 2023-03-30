import React, { useState } from 'react';
import Auth from '../utils/auth';
import '../assets/css/profile.css';


const MangaProfile = () => {
	return (
		<div>
		<div className='SavedManga'>
			<h3>Your Saved Manga</h3>
		</div>
		<div className='FavoritedManga'>
			<h3>Your Favorited Manga</h3>
		</div>
		</div>
	)
}

export default MangaProfile;