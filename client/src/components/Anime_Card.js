import React from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { ADD_ANIME } from '../utils/mutations';
import '../assets/css/anime_card.css';

const Anime_Card = (props) => {
    const [addAnime, { error }] = useMutation(ADD_ANIME);

    const anime = {
        animeId: props.animes.mal_id,
        title: props.animes.title,
        title_english: props.animes.title_english,
        title_japanese: props.animes.title_japanese,
        image: props.animes.images.jpg.large_image_url,
        episodes: props.animes.episodes,
        description: props.animes.synopsis,
        trailer: props.animes.trailer.url,
        duration: props.animes.duration,
        rating: props.animes.rating,
        rank: props.animes.rank,
        studios: props.animes.studios,
        genres: props.animes.genres
    };

    const handlerFavourite = async (anime) => {
        
        if (anime.title_english) {
            anime.title = anime.title_english;
            delete anime.title_english
        } else {
            delete anime.title_english
        }

        let genreNames = [];
        const genreList = anime.genres
        
        genreList.forEach((genre) => {
            genreNames.push(genre.name);
            
        })
        anime.genres = genreNames;

        if (anime.studios.length === 0) {
            anime.studios = null;
        } else {
            anime.studios = anime.studios[0].name;
        }

        console.log(anime);
        try {
            addAnime({
                variables: anime
              }).then((response) => {
                console.log(response);
              }).catch((err) => {
                console.log(err.networkError.result.errors);
              })


            // const mutationResponse = await addAnime({
            //     varibles: { anime: anime }
            // });
            // console.log(mutationResponse);
        } catch (err) {
            console.log(err);
        }
    }



    return (
        <div className='col-12 col-xxl-3 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center card-wrapper'>
            <div className='card-container'>
                <Link className='image-link' to={'/singleAnime'} state={anime}>
                    <img className='anime-img' src={anime.image} alt={anime.title} />
                </Link>
                <div className='anime-title-container'>
                    <div className='anime-title'>{anime.title_english ? anime.title_english : anime.title}</div>
                    <div className='japanese-title'>{anime.title_japanese}</div>

                    <button className='anime-button favourite' onClick={() => handlerFavourite(anime)}>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="30" height="30" viewBox="0 0 256 256">
                            <defs>
                            </defs>
                            <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                                <path d="M 47.755 3.765 l 11.525 23.353 c 0.448 0.907 1.313 1.535 2.314 1.681 l 25.772 3.745 c 2.52 0.366 3.527 3.463 1.703 5.241 L 70.42 55.962 c -0.724 0.706 -1.055 1.723 -0.884 2.72 l 4.402 25.667 c 0.431 2.51 -2.204 4.424 -4.458 3.239 L 46.43 75.47 c -0.895 -0.471 -1.965 -0.471 -2.86 0 L 20.519 87.588 c -2.254 1.185 -4.889 -0.729 -4.458 -3.239 l 4.402 -25.667 c 0.171 -0.997 -0.16 -2.014 -0.884 -2.72 L 0.931 37.784 c -1.824 -1.778 -0.817 -4.875 1.703 -5.241 l 25.772 -3.745 c 1.001 -0.145 1.866 -0.774 2.314 -1.681 L 42.245 3.765 C 43.372 1.481 46.628 1.481 47.755 3.765 z" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                            </g>
                        </svg>
                    </button>

                    <button className='anime-button saved'>
                        <svg className="saved" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="35" height="35">
                            <path d="M23 5H9C7.346 5 6 6.346 6 8v19a1 1 0 0 0 1.614.789L16 21.267l8.386 6.522a.996.996 0 0 0 1.053.109A1 1 0 0 0 26 27V8c0-1.654-1.346-3-3-3zm1 19.956-7.386-5.745a.999.999 0 0 0-1.228-.001L8 24.956V8c0-.551.449-1 1-1h14c.551 0 1 .449 1 1v16.956z"></path>
                        </svg>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Anime_Card;
