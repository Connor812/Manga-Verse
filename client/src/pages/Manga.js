import React from "react";

const Manga = () => {
  return (
		<>
    <h1>Manga</h1>

		<div className="search-wrapper">
        <div className="search-form">
          <form>
            <input type="text" placeholder="Search Manga"></input>
            <button>Search!</button>
          </form>
        </div>
			</div>
		</>
  )
};

export default Manga;
