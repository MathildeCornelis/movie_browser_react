import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, NavLink } from 'react-router-dom';
import moment from 'moment';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import clock from '../../public/assets/clock.svg';
import star from '../../public/assets/gray_star.svg';
import arrowreturn from '../../public/assets/return.svg';

const Spotlight_show = () => {
    const params = useParams();
    const [data, setData] = useState({
        backdrop_path: "",
        original_title: "",
        runtime: "",
        vote_average: "",
        release_date: "",
        overview: ""
    });
    const [recommendation, setRecommendation] = useState([]);
    const [emblaRef] = useEmblaCarousel({ loop: false }, [WheelGesturesPlugin()]); 

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_KEY}&language=en-US`)
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [params.id]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=${import.meta.env.VITE_KEY}&language=en-US&page=1`)
        .then(response => {
            // console.log(response.data.results)
            setRecommendation(response.data.results);
        })
        .catch(error => {
            console.log(error);
        });
    }, [params.id]);

    if (!recommendation.length) {
        return (
            <section className='w-full'>
                <div className='w-full'>
                    <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt={data.original_title}/>
                    <NavLink to='/'>
                        <img src={arrowreturn} alt="white arrow to return to the home page" className='absolute left-4 top-5 xl:w-[2%] xl:top-7 xl:left-7'/>
                    </NavLink>
                </div>
                <div className='w-full font-lato text-white pl-5 pt-5 pr-5 xl:pl-10 xl:pt-10 xl:pr-1'>
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
                            <p className='text-xs xl:text-sm mt-2 text-gray_light'>{moment(data.release_date).format('MMMM D, YYYY')}</p>
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
                    <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt={data.original_title}/>
                    <NavLink to='/'>
                        <img src={arrowreturn} alt="white arrow to return to the home page" className='absolute left-4 top-5 xl:w-[2%] xl:top-7 xl:left-7'/>
                    </NavLink>
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
                            <p className='text-xs xl:text-sm mt-2 text-gray_light'>{moment(data.release_date).format('MMMM D, YYYY')}</p>
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
                                {recommendation && recommendation.map((recom, index) =>(
                                    <div key={index} className='mr-2 ml-2 mt-4'>
                                        <div className="w-36 h-auto">
                                            <img src={`https://image.tmdb.org/t/p/original${recom.backdrop_path}`} alt={recom.original_title} className='rounded-xl'/>
                                        </div>
                                        <p className='font-lato text-sm pt-2'>{recom.original_title} <span className='text-gray_light text-xs'>({moment(recom.release_date).format('YYYY')})</span></p>
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
