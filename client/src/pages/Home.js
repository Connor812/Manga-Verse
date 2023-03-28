import React, { useState } from "react";
import Manga from './Manga';
import Anime from './Anime';

const Home = () => {

  const [currentPage, setCurrentPage] = useState(true);



  return (
    <div>
      <button onClick={() => setCurrentPage(true)}>Anime</button>
      <button onClick={() => setCurrentPage(false)}>Manga</button>
      {currentPage ? <Anime /> : <Manga />}
    </div>
  )

};

export default Home;
