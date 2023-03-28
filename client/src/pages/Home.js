import React, { useState } from "react";
import Manga from './Manga';
import Anime from './Anime';

const Home = () => {

  const [currentPage, setCurrentPage] = useState(true);



  return (
    <div className="home-wrapper">
      
      <div className="home-anime-maga">
        <button className="home-btn btn btn-info" onClick={() => setCurrentPage(true)}>Anime</button>
        <button className="home-btn btn btn-info" onClick={() => setCurrentPage(false)}>Manga</button>
      </div>

      <div className="home-content">
        {currentPage ? <Anime /> : <Manga />}
      </div>

    </div>
  )

};

export default Home;
