import React, { useState, useEffect } from "react";

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
                {genreSection.map((genre) => {
                    return <button onClick={handleSubmit} value={genre.genreId} className="genre-name genre-btn">{genre.name}</button>;
                })}
            </div>
            <div className="page-btn-container">
                <button
                    onClick={() => {
                        setGenreIndex(genreIndex - 1);
                    }}
                    className={genreIndex === 0 ? "page-btn hide" : "page-btn"}
                >
                    Page Back
                </button>
                <button
                    onClick={() => {
                        setGenreIndex(genreIndex + 1);
                    }}
                    className={
                        genreIndex === genreArray.length - 1 ? "page-btn hide" : "page-btn"
                    }
                >
                    Page Forward
                </button>
            </div>
        </>
    );
}

export default Genres;