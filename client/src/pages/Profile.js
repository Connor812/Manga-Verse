import React, { useState } from 'react';
import Auth from '../utils/auth';
import '../assets/css/profile.css';
import MangaProfile from '../pages/MangaProfile';
import AnimeProfile from '../pages/AnimeProfile';

import red_background from '../assets/img/red-background.jpg';
import orange_background from '../assets/img/orange-background.jpeg';
import yellow_background from '../assets/img/yellow-background.png';
import green_background from '../assets/img/green-background.jpg';
import blue_background from '../assets/img/blue-background.jpg';
import purple_background from '../assets/img/purple-bacgkround.jpg';
import pink_background from '../assets/img/pink-background.jpg';
import grey_background from '../assets/img/grey-background.jpg';
import black_background from '../assets/img/black-background.png';

const images = [
	{
		img: red_background,
		color: "red"
	},
	{
		img: orange_background,
		color: "orange"
	},
	{
		img: yellow_background,
		color: "yellow"
	},
	{
		img: green_background,
		color: "green"
	},
	{
		img: blue_background,
		color: "blue"
	},
	{
		img: purple_background,
		color: "purple"
	},
	{
		img: pink_background,
		color: "pink"
	},
	{
		img: grey_background,
		color: "grey"
	},
	{
		img: black_background,
		color: "black"
	}
];

const Profile = () => {
	const [currentPage, setCurrentPage] = useState(true);
	const [hideTheme, setHideTheme] = useState(true);
	const userData = Auth.loggedIn ? Auth.getProfile() : null;
	console.log(userData);

	const handleThemeChange = (color) => {
		if (color === 'red') {
			document.documentElement.style.setProperty('--main-color', 'var(--red)');
			document.documentElement.style.setProperty('--main-color-hover', 'var(--red-hover)');
			document.documentElement.style.setProperty('--main-background', 'var(--red-background)');
			document.documentElement.style.setProperty('--text-color', 'var(--black)');
		} else if (color === 'orange') {
			document.documentElement.style.setProperty('--main-color', 'var(--orange)');
			document.documentElement.style.setProperty('--main-color-hover', 'var(--orange-hover)');
			document.documentElement.style.setProperty('--main-background', 'var(--orange-background)');
			document.documentElement.style.setProperty('--text-color', 'var(--black)');
		} else if (color === 'yellow') {
			document.documentElement.style.setProperty('--main-color', 'var(--yellow)');
			document.documentElement.style.setProperty('--main-color-hover', 'var(--yellow-hover)');
			document.documentElement.style.setProperty('--main-background', 'var(--yellow-background)');
			document.documentElement.style.setProperty('--text-color', 'var(--black)');
		} else if (color === 'blue') {
			document.documentElement.style.setProperty('--main-color', 'var(--blue)');
			document.documentElement.style.setProperty('--main-color-hover', 'var(--blue-hover)');
			document.documentElement.style.setProperty('--main-background', 'var(--blue-background)');
			document.documentElement.style.setProperty('--text-color', 'var(--white)');
		} else if (color === 'green') {
			document.documentElement.style.setProperty('--main-color', 'var(--green)');
			document.documentElement.style.setProperty('--main-color-hover', 'var(--green-hover)');
			document.documentElement.style.setProperty('--main-background', 'var(--green-background)');
			document.documentElement.style.setProperty('--text-color', 'var(--black)');
		} else if (color === 'purple') {
			document.documentElement.style.setProperty('--main-color', 'var(--purple)');
			document.documentElement.style.setProperty('--main-color-hover', 'var(--purple-hover)');
			document.documentElement.style.setProperty('--main-background', 'var(--purple-background)');
			document.documentElement.style.setProperty('--text-color', 'var(--white)');
		} else if (color === 'pink') {
			document.documentElement.style.setProperty('--main-color', 'var(--pink)');
			document.documentElement.style.setProperty('--main-color-hover', 'var(--pink-hover)');
			document.documentElement.style.setProperty('--main-background', 'var(--pink-background)');
			document.documentElement.style.setProperty('--text-color', 'var(--black)');
		} else if (color === 'grey') {
			document.documentElement.style.setProperty('--main-color', 'var(--grey)');
			document.documentElement.style.setProperty('--main-color-hover', 'var(--grey-hover)');
			document.documentElement.style.setProperty('--main-background', 'var(--grey-background)');
			document.documentElement.style.setProperty('--text-color', 'var(--black)');
		} else {
			document.documentElement.style.setProperty('--main-color', 'var(--black)');
			document.documentElement.style.setProperty('--main-color-hover', 'var(--black-hover)');
			document.documentElement.style.setProperty('--main-background', 'var(--black-background)');
			document.documentElement.style.setProperty('--text-color', 'var(--white)');
		}
	}

	return (
		<div className='profile-wrapper'>
			<div>
				<div className='ProfileHeader'>
					<div>
						<h1 className='HeaderText'>{userData.username}'s Profile</h1>
					</div>
					<div>
						<button className="universal-btn" onClick={() => setCurrentPage(true)}>Your Anime</button>
						<button className="universal-btn" onClick={() => setCurrentPage(false)}>Your Manga</button>
						<button className="universal-btn" onClick={(event) => {
							hideTheme
								? setHideTheme(false)
								: setHideTheme(true);
							event.preventDefault();
							console.log(hideTheme)
						}}>Themes</button>
					</div>
				</div>
				{hideTheme ? null : (
					<div className="theme-center">
						<div className="theme-container row">
							{images.map((image) => {
								console.log(image)
								return (
									<div className="col-12 col-xxl-3 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
										<div className="theme-img-background">
											<button className='img-theme-btn' onClick={(event) => { handleThemeChange(image.color); event.preventDefault(); }}>
												<img className="theme-img" src={image.img} />
											</button>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				)}
				<div>
					{currentPage ? <AnimeProfile /> : <MangaProfile />}
				</div>
			</div>
		</div>
	)
}

export default Profile;