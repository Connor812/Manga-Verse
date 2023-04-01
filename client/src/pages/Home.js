import React, { useState } from "react";
import Manga from './Manga';
import Anime from './Anime';

const Home = () => {

  const [currentPage, setCurrentPage] = useState(true);

// function changeColor(page) {
//   if (page) { 
//    document.documentElement.style.setProperty('--main-color', 'var(--orange)');
//    document.documentElement.style.setProperty('--main-background', 'var(--naruto)');
//   } else {
//    document.documentElement.style.setProperty('--main-color', 'var(--blue)')
//    document.documentElement.style.setProperty('--main-background', 'var(--your-name)');
//   }
// }d

  return (
    <div className="home-wrapper">

      <div className="anime-manga-wrapper">

        <div className="home-anime-manga">
          <button className="universal-btn" onClick={() => setCurrentPage(true)}>Anime</button>
          <button className="universal-btn" onClick={() => setCurrentPage(false)}>Manga</button>
        </div>
        
      </div>

      <div>
        {currentPage ? <Anime /> : <Manga />}
      </div>

    </div>
  )

};

export default Home;
