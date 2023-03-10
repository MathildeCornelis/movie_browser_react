import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Spotlight = () => {
    const [spotlightMovie, setSpotlightMovie] = useState([]);
    
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=0db63e7d578b1b7d392405ee14682954&language=en-US&page=1')
        .then(response => {
            setSpotlightMovie(response.data.results)
        })
        .catch(error => {
            console.log(error);
        });
    }, [])

    const random = Math.round(Math.random() * 20);
    const randomPlusOne = random + 1;

    return (
        <section className='w-full flex flex-col items-center'>
            {spotlightMovie.slice(random, randomPlusOne).map((movie, index) => (
                <NavLink key={index} to={`/movie_spotlight/${movie.id}`} className='xl:w-3/4 '>
                        <div className='w-11/12 rounded-xl relative xl:w-full '>
                            <div key={movie.id} className='w-80 xl:w-full h-52 mr-2 ml-2 flex rounded-2xl overflow-hidden xl:h-[30rem]'>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='flex items-start rounded-3xl h-min xl:w-full xl:items-center'/>
                            </div>
                        </div>
                        <div className='w-7/12 xl:h-36 h-16 flex flex-row items-center pl-5 bg-gray_light bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray_light border-opacity-50 absolute inset-y-56 inset-x-12 rounded-2xl xl:top-[29rem] xl:left-[13rem]'>
                            <div className='w-10 xl:w-20 h-10 xl:h-20 flex items-center justify-center bg-gradient-to-r from-orange_dark to-orange_light rounded-3xl xl:rounded-full'>
                                <div className="w-0 h-0 border-t-[8px] xl:border-t-[14px] border-t-transparent border-l-[14px] xl:border-l-[24.5px] border-l-white border-b-[8px] xl:border-b-[14px] border-b-transparent">
                                </div>
                            </div>
                        </div>
                        <div className='w-1/2 flex flex-col font-lato text-gray_light ml-24 absolute top-[14.2rem] xl:top-[31.4rem] xl:left-[16.75rem]'>
                            <p className='text-sm w-2/3 xl:text-2xl'>Movie Spotlight</p>
                            <p className='text-white text-l w-2/3 leading-none xl:text-3xl xl:w-11/12'>{movie.title}</p>
                        </div>
                </NavLink>
            ))}
        </section>
    );
};

export default Spotlight;