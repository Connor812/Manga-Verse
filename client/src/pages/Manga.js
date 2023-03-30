import React, { useState } from 'react';
import Manga_Card from '../components/Manga_Card';
import '../assets/css/anime.css';
const url = 'https://api.jikan.moe/v4/manga';


function Manga() {

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
			<h1>Manga</h1>

			<div className="search-wrapper">
				<div className="search-form">
					<form>
						<input type="text" placeholder="Search Manga" onChange={handleChange} />
						<button onClick={handleSubmit}>Search!</button>
					</form>
				</div>
			</div>
			<div className='row'>
				{!result.data
					? null
					: result.data.map((manga) => {
						return <Manga_Card mangas={manga} />
					})}
			</div>
		</div>
	)
}

export default Manga;