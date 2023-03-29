import React from 'react';
import '../assets/css/anime_card.css'

const Anime_Card = (props) => {
    console.log(props.animes.images.jpg.large_image_url)
    const anime = {
        animeId: props.animes.mal_id,
        title: props.animes.title_english,
        japaneseTitle: props.animes.title_japanese,
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
    console.log(anime);
    return (
            <div className='col-12 col-xxl-3 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center card-wrapper'>
                <div className='card-container'>
                    <img className='anime-img' src={anime.image} alt={anime.title}></img>
                    <div className='anime-title-container'>
                        <div className='anime-title'>{anime.title}</div>
                        <div className='japanese-title'>{anime.japaneseTitle}</div>

                        <button className='anime-button favourite'>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="30" height="30" viewBox="0 0 256 256">
                                <defs>
                                </defs>
                                <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                                    <path d="M 47.755 3.765 l 11.525 23.353 c 0.448 0.907 1.313 1.535 2.314 1.681 l 25.772 3.745 c 2.52 0.366 3.527 3.463 1.703 5.241 L 70.42 55.962 c -0.724 0.706 -1.055 1.723 -0.884 2.72 l 4.402 25.667 c 0.431 2.51 -2.204 4.424 -4.458 3.239 L 46.43 75.47 c -0.895 -0.471 -1.965 -0.471 -2.86 0 L 20.519 87.588 c -2.254 1.185 -4.889 -0.729 -4.458 -3.239 l 4.402 -25.667 c 0.171 -0.997 -0.16 -2.014 -0.884 -2.72 L 0.931 37.784 c -1.824 -1.778 -0.817 -4.875 1.703 -5.241 l 25.772 -3.745 c 1.001 -0.145 1.866 -0.774 2.314 -1.681 L 42.245 3.765 C 43.372 1.481 46.628 1.481 47.755 3.765 z" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                                </g>
                            </svg>
                        </button>

                        <button className='anime-button saved'>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="30" height="40" viewBox="0 0 256 256">

                                <defs>
                                </defs>
                                <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                                    <path d="M 88 90 H 2 c -1.104 0 -2 -0.896 -2 -2 V 2 c 0 -1.104 0.896 -2 2 -2 h 65.795 c 0.53 0 1.039 0.211 1.414 0.586 l 20.205 20.206 C 89.789 21.167 90 21.675 90 22.206 V 88 C 90 89.104 89.104 90 88 90 z M 4 86 h 82 V 23.034 L 66.967 4 H 4 V 86 z" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                                    <path d="M 71.841 90 H 18.159 c -1.104 0 -2 -0.896 -2 -2 V 48.152 c 0 -1.104 0.896 -2 2 -2 h 53.682 c 1.104 0 2 0.896 2 2 V 88 C 73.841 89.104 72.945 90 71.841 90 z M 20.159 86 h 49.682 V 50.152 H 20.159 V 86 z" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                                    <path d="M 54.427 21.649 H 18.159 c -1.104 0 -2 -0.896 -2 -2 V 2 c 0 -1.104 0.896 -2 2 -2 h 36.268 c 1.104 0 2 0.896 2 2 v 17.649 C 56.427 20.754 55.531 21.649 54.427 21.649 z M 20.159 17.649 h 32.268 V 4 H 20.159 V 17.649 z" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                                    <path d="M 88 90 H 2 c -1.104 0 -2 -0.896 -2 -2 V 2 c 0 -1.104 0.896 -2 2 -2 h 65.795 c 0.53 0 1.039 0.211 1.414 0.586 l 20.205 20.206 C 89.789 21.167 90 21.675 90 22.206 V 88 C 90 89.104 89.104 90 88 90 z M 4 86 h 82 V 23.034 L 66.967 4 H 4 V 86 z" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                                    <path d="M 62.706 60.304 H 27.293 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 35.413 c 1.104 0 2 0.896 2 2 S 63.811 60.304 62.706 60.304 z" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                                    <path d="M 62.706 70.076 H 27.293 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 35.413 c 1.104 0 2 0.896 2 2 S 63.811 70.076 62.706 70.076 z" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                                    <path d="M 62.706 79.849 H 27.293 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 35.413 c 1.104 0 2 0.896 2 2 S 63.811 79.849 62.706 79.849 z" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                                </g>
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
    )
}

export default Anime_Card;
