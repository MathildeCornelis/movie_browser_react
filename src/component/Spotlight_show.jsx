import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import { format } from 'date-fns';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import clock from '../../public/assets/clock.svg';
import star from '../../public/assets/gray_star.svg';

const Spotlight_show = () => {
    const params = useParams();
    const [data, setData] = useState([]);
    const [recommendation, setRecommendation] = useState([]);
    const [emblaRef] = useEmblaCarousel({ loop: false }, [WheelGesturesPlugin()]); 

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=0db63e7d578b1b7d392405ee14682954&language=en-US`)
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [params.id]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=0db63e7d578b1b7d392405ee14682954&language=en-US&page=1`)
        .then(response => {
            // console.log(response.data.results)
            setRecommendation(response.data.results);
        })
        .catch(error => {
            console.log(error);
        });
    }, [params.id]);

    if (!recommendation) {
        return (
            <section className='w-full'>
                <div className='w-full'>
                    <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt="" className='' />
                </div>
                <div className='w-full font-lato text-white pl-5 pt-5 pr-5 xl:pl-10 xl:pt-10 xl:pr-10'>
                    <h1 className='w-full text-2xl xl:text-5xl'>{data.original_title}</h1>
                    <div className='w-3/4 flex flex-row pt-2 mb-5 text-gray_light xl:mt-10 xl:mb-10'>
                        <div className='w-1/2 flex flex-row'>
                            <img src={clock} alt={data.original_title} className='w-3 xl:w-6'/>
                            <p className='pl-2 text-sm xl:text-lg'>{data.runtime} minutes</p>
                        </div>
                        <div className='w-1/2 flex flex-row'>
                            <img src={star} alt="" className='w-3 xl:w-6'/>
                            <p className='pl-2 text-sm xl:text-lg'>{data.vote_average} (IMDb)</p>
                        </div>
                    </div>
                    <div className='bg-white w-full h-[0.05rem] bg-opacity-50'>
                    </div>
                    <div className='w-full flex flex-row mt-5 pb-5'>
                        <div className='w-1/2'>
                            <p className='text-lg xl:text-2xl'>Release date</p>
                            <p className='text-xs xl:text-sm mt-2 text-gray_light'>{data.release_date}</p>
                        </div>
                        <div className='w-1/2'>
                            <p className='text-lg xl:text-2xl'>Genre</p>
                            <div className='text-xs xl:text-sm mt-2 text-gray_light'>
                                Action
                            </div>
                        </div>
                    </div>
                    <div className='bg-white w-full h-[0.05rem] bg-opacity-50'>
                    </div>
                    <div className='w-full mt-5 pb-5'>
                        <p className='text-lg xl:text-2xl mb-1'>Synopsis</p>
                        <p className='text-sm xl:text-base text-gray_light'>{data.overview}</p>
                    </div>
                </div>
            </section>
        )
    }

    return (
            <section className='w-full'>
                <div className='w-full'>
                    <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt="" className='' />
                </div>
                <div className='w-full font-lato text-white pl-5 pt-5 pr-5 xl:pl-10 xl:pt-10 xl:pr-10'>
                    <h1 className='w-full text-2xl xl:text-5xl'>{data.original_title}</h1>
                    <div className='w-3/4 flex flex-row pt-2 mb-5 text-gray_light xl:mt-10 xl:mb-10'>
                        <div className='w-1/2 flex flex-row'>
                            <img src={clock} alt={data.original_title} className='w-3 xl:w-6'/>
                            <p className='pl-2 text-sm xl:text-lg'>{data.runtime} minutes</p>
                        </div>
                        <div className='w-1/2 flex flex-row'>
                            <img src={star} alt="" className='w-3 xl:w-6'/>
                            <p className='pl-2 text-sm xl:text-lg'>{data.vote_average} (IMDb)</p>
                        </div>
                    </div>
                    <div className='bg-white w-full h-[0.05rem] bg-opacity-50'>
                    </div>
                    <div className='w-full flex flex-row mt-5 pb-5'>
                        <div className='w-1/2'>
                            <p className='text-lg xl:text-2xl'>Release date</p>
                            <p className='text-xs xl:text-sm mt-2 text-gray_light'>{data.release_date}</p>
                        </div>
                        <div className='w-1/2'>
                            <p className='text-lg xl:text-2xl'>Genre</p>
                            <div className='text-xs xl:text-sm mt-2 text-gray_light'>
                                Action
                            </div>
                        </div>
                    </div>
                    <div className='bg-white w-full h-[0.05rem] bg-opacity-50'>
                    </div>
                    <div className='w-full mt-5 pb-5'>
                        <p className='text-lg xl:text-2xl mb-1'>Synopsis</p>
                        <p className='text-sm xl:text-base text-gray_light'>{data.overview}</p>
                    </div>
                    <div>
                        <p className='text-lg xl:text-2xl mb-1'>Related Movies</p>
                        <div ref={emblaRef} className='flex flex-row overflow-hidden'>
                            <div className='flex flex-row'>
                                {recommendation && recommendation.map((recom) =>(
                                    <div className='mr-2 ml-2 mt-4'>
                                        <div key={recom.id} className="w-36 h-auto">
                                            <img src={`https://image.tmdb.org/t/p/original${recom.backdrop_path}`} alt={recom.original_title} className='rounded-xl'/>
                                        </div>
                                        <p className='font-lato text-sm pt-2'>{recom.original_title} <span className='text-gray_light text-xs'>({recom.release_date})</span></p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
    );
};

export default Spotlight_show;
