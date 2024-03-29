import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
// import { format } from 'date-fns';
import moment from 'moment/moment';
const Category_show_film = ({ genreId, displayFilm }) => {
    const [genres, setGenres] = useState([]);
    const [url, setUrl] = useState('');

    useEffect(() => {
        if (genreId) { 
            setUrl(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&with_watch_monetization_types=flatrate`);
        } else {
            setUrl(''); 
        }
    }, [genreId]);
    
    useEffect(() => {
        if (displayFilm){
            setUrl(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_KEY}&language=en-US&query=${displayFilm}&page=1&include_adult=false`)
        } else {
            setUrl('');
        }
    }, [displayFilm]);

    useEffect(() => {
        if (url) {
            axios
                .get(url)
                .then((response) =>{
                    setGenres(response.data.results);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [url]);

    return (
        <section className='flex flex-row flex-wrap justify-around m-4'>
        {genres.map((genre, index) => (
            <div key={index} className="w-5/12 flex justify-center xl:w-[27%]">
                <NavLink to={`/movie_category/${genre.id}`}>
                <div className='w-full h-auto ml-2 mr-2 mb-4'>
                    <div className='w-full h-44 overflow-hidden rounded-xl flex items-center xl:h-auto'>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${genre.poster_path}`}
                        alt={genre.original_title}
                        className='w-full h-60 xl:h-auto'
                    />
                    </div>
                    <p className='font-lato text-sm text-white mt-3 leading-tight xl:text-lg'>
                    {genre.original_title} 
                    <span className='text-gray_light'> ({moment(genre.release_date).format('YYYY')})</span>
                    </p>
                </div>
                </NavLink>
            </div>
        ))}
        </section>
    );
};

export default Category_show_film;
