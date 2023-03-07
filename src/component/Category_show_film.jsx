import React, {useEffect, useState} from 'react';
import axios from 'axios';

const category_show_film = () => {

    const [genres, setGenres] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=0db63e7d578b1b7d392405ee14682954&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12&with_watch_monetization_types=flatrate`)
        .then(response => {
            setGenres(response.data.results);
            
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <section className='flex flex-row flex-wrap justify-around m-4'>
            {genres.map((genre, index) => (
                <div key={index} className='w-5/12 h-auto ml-2 mr-2 mb-4'>
                    <div className='h-44 overflow-hidden rounded-xl flex items-center'>
                        <img src={`https://image.tmdb.org/t/p/w500${genre.poster_path}`} alt={genre.original_title} className='w-full h-60'/>
                    </div>
                    <p className='font-lato text-sm text-white mt-3 leading-tight'>{genre.original_title} <span className='text-gray_light'>({genre.release_date})</span></p>
                </div>
            ))}
        </section>
    );
};

export default category_show_film;