import React, { useState } from 'react';
import Auth from '../utils/auth';
import '../assets/css/profile.css';
import MangaProfile from '../pages/MangaProfile';
import AnimeProfile from '../pages/AnimeProfile';

const Profile = () => {
	const [currentPage, setCurrentPage] = useState(true);
    const userData = Auth.loggedIn ? Auth.getProfile() : null;
	console.log(userData)
	return (
		<div className='profile-wrapper'>
		<div>
		<div className='ProfileHeader'>
		<h1 className='HeaderText'>{userData.username}'s Profile</h1>
		<button className="profile-btn btn btn-danger" onClick={() => setCurrentPage(true)}>Your Anime</button>
        <button className="profile-btn btn btn-info" onClick={() => setCurrentPage(false)}>Your Manga</button>
		</div>
		<div>
		{currentPage ? <AnimeProfile /> : <MangaProfile />}
		</div>
		</div>
		</div>
	)
}

export default Profile;