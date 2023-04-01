import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { HANDLE_MANGA } from '../utils/mutations';
import Auth from '../utils/auth';
import '../assets/css/anime_card.css';

const Manga_Card = (props) => {
    const userData = Auth.loggedIn() ? Auth.getProfile() : null;
    const navigate = useNavigate();
    const [handleManga, { error }] = useMutation(HANDLE_MANGA);

    const manga = {
        mangaId: props.mangas.mal_id,
        title: props.mangas.title,
        title_english: props.mangas.title_english,
        title_japanese: props.mangas.title_japanese,
        image: props.mangas.images.jpg.large_image_url,
        chapters: props.mangas.chapters,
        description: props.mangas.synopsis,
        rank: props.mangas.rank,
        author: props.mangas.authors,
        genres: props.mangas.genres
    };

    const handlerManga = async (manga, favourite) => {
        if (!userData) {
            console.log('works');
            return navigate('/login');
        }
        console.log(manga)
        if (manga.title_english) {
            manga.title = manga.title_english
            delete manga.title_english
        } else {
            delete manga.title_english
        }

        let genreNames = [];
        const genreList = manga.genres

        genreList.forEach((genre) => {
            genreNames.push(genre.name);
        })
        manga.genres = genreNames;

        if (manga.author.length === 0) {
            manga.author = null;
        } else {
            manga.author = manga.author[0].name;
        }

        manga.isFavourite = favourite;
        console.log(manga);
        try {
            const response = handleManga({
                variables: manga
            })
            console.log(response);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='col-12 col-xxl-3 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center card-wrapper'>
            <div className='card-container'>
                <Link className='image-link' to={'/singleManga'} state={manga}>
                    <div className="img-background">
                        <img className='anime-img' src={manga.image} alt={manga.title} />
                    </div>
                </Link>
                <div className='anime-title-container'>
                    <div className='anime-title'>{manga.title_english ? manga.title_english : manga.title}</div>
                    <div className='japanese-title'>{manga.title_japanese}</div>

                    <button className='anime-button favourite' onClick={() => handlerManga(manga, true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="30" height="30" viewBox="0 0 256 256">
                            <defs>
                            </defs>
                            <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                                <path d="M 47.755 3.765 l 11.525 23.353 c 0.448 0.907 1.313 1.535 2.314 1.681 l 25.772 3.745 c 2.52 0.366 3.527 3.463 1.703 5.241 L 70.42 55.962 c -0.724 0.706 -1.055 1.723 -0.884 2.72 l 4.402 25.667 c 0.431 2.51 -2.204 4.424 -4.458 3.239 L 46.43 75.47 c -0.895 -0.471 -1.965 -0.471 -2.86 0 L 20.519 87.588 c -2.254 1.185 -4.889 -0.729 -4.458 -3.239 l 4.402 -25.667 c 0.171 -0.997 -0.16 -2.014 -0.884 -2.72 L 0.931 37.784 c -1.824 -1.778 -0.817 -4.875 1.703 -5.241 l 25.772 -3.745 c 1.001 -0.145 1.866 -0.774 2.314 -1.681 L 42.245 3.765 C 43.372 1.481 46.628 1.481 47.755 3.765 z" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                            </g>
                        </svg>
                    </button>

                    <button className='anime-button saved' onClick={() => handlerManga(manga, false)}>
                        <svg className="saved" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="35" height="35">
                            <path d="M23 5H9C7.346 5 6 6.346 6 8v19a1 1 0 0 0 1.614.789L16 21.267l8.386 6.522a.996.996 0 0 0 1.053.109A1 1 0 0 0 26 27V8c0-1.654-1.346-3-3-3zm1 19.956-7.386-5.745a.999.999 0 0 0-1.228-.001L8 24.956V8c0-.551.449-1 1-1h14c.551 0 1 .449 1 1v16.956z"></path>
                        </svg>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Manga_Card;