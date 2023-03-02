import React, {useEffect, useState} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import axios from 'axios';

const Trending = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [WheelGesturesPlugin()], [Autoplay()]); 
    // const [data, setData] = useState([]);
    const [trendingMovie, setTrendingMovie] = useState([]);


    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=0db63e7d578b1b7d392405ee14682954')
        .then(response => {
            // setData(response.data);
            setTrendingMovie(response.data.results)
        })
        .catch(error => {
            console.log(error);
        });
    }, [])
    
    return (
        <section className='w-full flex flex-col items-center pl-5 pt-7 pb-7 pr-5 text-xl'>
            <h2 className='font-lato text-white pr-[17rem]'>Trending</h2>
            <div className='w-auto flex flex-row justify-center h-80 mt-5'>
                    {trendingMovie.map((movie) => (
                        <div ref={emblaRef} className='w-52 ml-5 overflow-hidden'>
                            <div className='w-52  flex rounded-2xl bg-orange_light overflow-hidden'>
                                <img key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='w-52'/>
                            </div>
                        </div>
                    ))}
                    {/* <div className='w-full h-80 mr-5 flex justify-center rounded-2xl bg-orange_light overflow-hidden'>
                            <img src="src/assets/avengers.png" alt="" className='max-w-screen-sm pl-20'/>
                    </div>
                    <div className='w-full h-80 mr-5 flex justify-center rounded-2xl bg-orange_light overflow-hidden'>
                            <img src="src/assets/tenet.png" alt="" className='max-w-screen-sm pl-20'/>
                    </div> */}
            </div>

        </section>
    );
};

export default Trending;