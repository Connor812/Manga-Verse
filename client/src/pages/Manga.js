import React, { useState } from 'react';
import Manga_Card from '../components/Manga_Card';
import Genres from '../components/Genres';
import genresArray from '../assets/genres_info/genres.json';
import '../assets/css/anime.css';
const url = 'https://api.jikan.moe/v4/manga';
const genreURL = 'https://api.jikan.moe/v4/manga?genres=';

function Manga() {

	const [search, setSearchState] = useState('');
	const [result, setResultState] = useState([]);
	const [hideGenres, setHideGenres] = useState(true);

	const handleChange = (event) => {
		const search = event.target.value;
		console.log(search);
		setSearchState(search);
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (search === '') return;
		try {
			const response = await fetch(`${url}?q=${search}`);
			const data = await response.json();
			console.log(data);
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
			<h2 className='anime-page-title'>Manga</h2>

			<div className="search-wrapper">
				<div className="search-form">
					<form>
						<div>
							<input type="text" placeholder="Search Manga" onChange={handleChange} />
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
				{!result.data
					? null
					: result.data.map((manga, index) => {
						return <Manga_Card key={index} mangas={manga} />
					})}
			</div>

		</div>
	)
}

export default Manga;