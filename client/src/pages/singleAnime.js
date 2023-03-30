import React from 'react';
import { useLocation } from 'react-router-dom';


const SingleAnime = ()  => {
    const location = useLocation();
    const anime = location?.state;
    return (
        <h1></h1>
    )
}

export default SingleAnime;