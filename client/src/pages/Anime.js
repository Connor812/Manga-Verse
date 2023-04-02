import React, { useState } from 'react';
import Anime_Card from '../components/Anime_Card';
import Genres from '../components/Genres';
import genresArray from '../assets/genres_info/genres.json';
import '../assets/css/anime.css';
const url = 'https://api.jikan.moe/v4/anime?q=';
const genreURL = 'https://api.jikan.moe/v4/anime?genres=';

function Anime() {
	const [search, setSearchState] = useState('');
	const [result, setResultState] = useState([]);
	const [hideGenres, setHideGenres] = useState(true);

	const handleChange = (event) => {
		const search = event.target.value;
		setSearchState(search);
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (search === '') return;
		try {
			console.log(`${url}${search}`)
			const response = await fetch(`${url}${search}`);
			const data = await response.json();
			setResultState(data);
		} catch (err) {
			console.log(err)
		}
	}

	const handleGenreSubmit = async (event) => {
		event.preventDefault();
		const genre = event.target.value;
		console.log(genre)
		if (genre === '') return;
		try {
			console.log(`${genreURL}${genre}`)
			const response = await fetch(`${genreURL}${genre}`);
			const data = await response.json();
			console.log(data)
			setResultState(data);
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<div className='home-content'>
			<h2 className='anime-page-title'>Anime</h2>

			<div className="search-wrapper">
				<div className="search-form">
					<form>
						<div>
							<input type="text" placeholder="Search Anime" onChange={handleChange} />
						</div>
						<div className='search-btn-container'>
							<button className="universal-btn" onClick={handleSubmit}>
								Search
							</button>
							<button className="universal-btn" onClick={(event) => {
								event.preventDefault(); 
								setHideGenres(hideGenres ? false : true);
								}}>
								{hideGenres ? 'Genres' : 'Hide Genres'}
							</button>
						</div>
					</form>
				</div>
			</div>
			<div className='genre-center'>
				<div className={hideGenres ? 'genre-section hide' : 'genre-section'}>
					<Genres genre={genresArray} handleGenreSubmit={handleGenreSubmit} />
				</div>
			</div>

			<div className='row'>
				{result.data
					? result.data.map((anime, index) => {
						return <Anime_Card key={index} animes={anime} />
					})
					: null
					}
			</div>

		</div>
	)
}

export default Anime;