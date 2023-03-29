import React, { useState } from 'react';
import Anime_Card from '../components/Anime_Card';
import '../assets/css/anime.css';
const url = 'https://api.jikan.moe/v4/anime';


function Anime() {

	const [search, setSearchState] = useState('');
	const [result, setResultState] = useState([]);

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

		}
	}

	return (
		<div className='home-content'>
			<h1>Anime</h1>

			<div className="search-wrapper">
				<div className="search-form">
					<form>
						<input type="text" placeholder="Search Anime" onChange={handleChange} />
						<button onClick={handleSubmit}>Search!</button>
					</form>
				</div>
			</div>
			<div className='row'>
				{!result.data
					? console.log('error')
					: result.data.map((anime) => {
						return <Anime_Card animes={anime} />
					})}
			</div>

		</div>
	)
}

export default Anime;