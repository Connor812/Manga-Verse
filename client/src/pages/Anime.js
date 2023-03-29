import React, { useState } from 'react';


const Anime = () => {
	return (
		<>
    <h1>Anime</h1>

		<div className="search-wrapper">
        <div className="search-form">
          <form>
						<input type="text" placeholder="Search Anime"></input>
            <button>Search!</button>
          </form>
        </div>
			</div>
		</>
	)
}

export default Anime;