import React, { useState, useEffect } from "react";
import '../assets/css/genre.css'

const Genres = (props) => {
    const handleSubmit = (event) => {
        props.handleGenreSubmit(event);
    }
    const genre = props.genre;
    const genreArray = genre.reduce((acc, cur, index) => {
        const arrayIndex = Math.floor(index / 15);

        if (!acc[arrayIndex]) {
            acc[arrayIndex] = [];
        }

        acc[arrayIndex].push(cur);

        return acc;
    }, []);

    const [genreIndex, setGenreIndex] = useState(0);
    const [genreSection, setGenreSection] = useState(genreArray[genreIndex]);

    useEffect(() => {
        if (genreArray[genreIndex]) {
            setGenreSection(genreArray[genreIndex]);
        }
    }, [genreIndex]);

    return (
        <>
            <div className="genre-display">
                {genreSection.map((genre, index) => {
                    return <button key={index} onClick={handleSubmit} value={genre.genreId} className="genre-name genre-btn">{genre.name}</button>;
                })}
            </div>
            <div className="page-btn-container">
                <button
                    onClick={() => {
                        setGenreIndex(genreIndex - 1);
                    }}
                    className={genreIndex === 0 ? "page-btn hide" : "page-btn"}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1" viewBox="0 0 512 512">
                        <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "/>
                    </svg>
                </button>
                <button
                    onClick={() => {
                        setGenreIndex(genreIndex + 1);
                    }}
                    className={
                        genreIndex === genreArray.length - 1 ? "page-btn hide" : "page-btn"
                    }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1" viewBox="0 0 512 512" >
                        <polygon points="160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 " />
                    </svg>
                </button>
            </div>
        </>
    );
}

export default Genres;