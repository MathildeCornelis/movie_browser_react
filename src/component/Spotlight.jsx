import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Spotlight = () => {
    const [spotlightMovie, setSpotlightMovie] = useState([]);

    function randomNumber() {
        let min = 1;
        let max = 20;
        let random = Math.round(Math.random() * (max - min + 1) + min);
        return random;
    }
    console.log(randomNumber());
    
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=0db63e7d578b1b7d392405ee14682954&language=en-US&page=1')
        .then(response => {
            setSpotlightMovie(response.data.results)
        })
        .catch(error => {
            console.log(error);
        });
    }, [])

    return (
        <section className='w-full flex flex-col items-center'>
            {spotlightMovie.slice(1, 2).map((movie) => (
                <div>
                    <div className='w-11/12 rounded-xl relative'>
                        <div key={movie.id} className='w-80 h-52 mr-2 ml-2 flex rounded-2xl overflow-hidden'>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='flex items-start rounded-3xl h-min'/>
                        </div>
                    </div>
                    <div className='w-7/12 h-16 flex flex-row items-center pl-5 bg-gray_light bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray_light border-opacity-50 absolute inset-y-56 inset-x-12 rounded-2xl'>
                        <div className='w-10 h-10 flex items-center justify-center bg-gradient-to-r from-orange_dark to-orange_light rounded-3xl'>
                            <div class="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent">
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 flex flex-col font-lato text-gray_light ml-24 absolute top-[14.2rem]'>
                        <p className='text-sm w-2/3'>Movie Spotlight</p>
                        <p className='text-white text-l w-2/3'>{movie.title}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Spotlight;