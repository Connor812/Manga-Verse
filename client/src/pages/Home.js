import React, { useState } from "react";
import Manga from './Manga';
import Anime from './Anime';

const Home = () => {

  const [currentPage, setCurrentPage] = useState(true);



  return (
    <div className="home-wrapper">

      <div className="search-wrapper">

        <div className="search-form">
          <form>
            <input></input>
            <button>Search</button>
          </form>
        </div>
        
        <div className="home-anime-maga">
          <button className="home-btn btn btn-info" onClick={() => setCurrentPage(true)}>Anime</button>
          <button className="home-btn btn btn-info" onClick={() => setCurrentPage(false)}>Manga</button>
        </div>

      </div>

      <div className="home-content">
        {currentPage ? <Anime /> : <Manga />}
      </div>

    </div>
  )

};

export default Home;
