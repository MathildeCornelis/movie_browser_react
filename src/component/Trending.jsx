import React, {useEffect, useState} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Trending = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [WheelGesturesPlugin()]); 
    const [trendingMovie, setTrendingMovie] = useState([]);


    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=0db63e7d578b1b7d392405ee14682954')
        .then(response => {
            setTrendingMovie(response.data.results);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <section className='w-full flex flex-col items-center xl:items-start pl-5 pt-7 pb-7 pr-5 text-xl xl:mt-10'>
            <h2 className='font-lato text-white pr-[17rem] xl:text-4xl xl:pl-10'>Trending</h2>
            <div ref={emblaRef} className='w-full flex flex-row justify-center h-80 xl:h-96 mt-5 overflow-hidden xl:mt-10'>
                <div className='flex flex-row'>
                    {trendingMovie.map((movie, index) => (
                        <NavLink to={`/movie_trending/${movie.id}`}>
                            <div key={index} className='justify-center w-52 mr-2 ml-2 flex rounded-2xl bg-orange_light overflow-hidden'>
                                <img key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='w-52'/>
                                <div className='w-16 absolute rounded-xl p-2 m-3 ml-32 bg-gray_light bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray_light border-opacity-50 overflow-hidden'>
                                    <p className='font-lato text-white text-xs'>IMBd</p>
                                    <div className='w-full flex flex-row overflow-hidden items-center'>
                                        <img src="src/assets/star.svg" alt="" className='w-1/3 h-5'/>
                                        <p className='w-2/3 font-lato text-white text-2xl pl-2'>{Math.round(movie.vote_average)}</p>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center w-48 h-20 mt-56 absolute rounded-xl bg-gray_light bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray_light border-opacity-50 overflow-hidden'>
                                    <p className='flex justify-center w-11/12 font-lato text-white text-lg'>{movie.title}</p>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Trending;