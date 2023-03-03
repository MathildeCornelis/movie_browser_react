import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import clock from '../../public/assets/clock.svg';
import star from '../../public/assets/gray_star.svg';

const Trending_show_img = () => {
    const params = useParams();
    const [data, setData] = useState([]);
    const [recommendation, setRecommendation] = useState([]);

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
            setRecommendation(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [params.id]);

    console.log(recommendation);
    return (
            <div className='w-full'>
                <div className='w-full'>
                    <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt="" className='' />
                </div>
                <div className='w-full font-lato text-white pl-5 pt-5 pr-5'>
                    <p className='w-full text-2xl'>{data.original_title}</p>
                    <div className='w-3/4 flex flex-row pt-2 mb-5 text-gray_light'>
                        <div className='w-1/2 flex flex-row'>
                            <img src={clock} alt="" className='w-3'/>
                            <p className='pl-2 text-sm'>{data.runtime} minutes</p>
                        </div>
                        <div className='w-1/2 flex flex-row'>
                            <img src={star} alt="" className='w-3'/>
                            <p className='pl-2 text-sm'>{data.vote_average} (IMDb)</p>
                        </div>
                    </div>
                    <div className='bg-white w-full h-[0.05rem] bg-opacity-50'>
                    </div>
                    <div className='w-full flex flex-row mt-5 pb-5'>
                        <div className='w-1/2'>
                            <p className='text-l'>Release date</p>
                            <p className='text-xs mt-2 text-gray_light'>{data.release_date}</p>
                        </div>
                        <div className='w-1/2'>
                            <p className='text-l'>Genre</p>
                            <div className='text-xs mt-2 text-gray_light'>
                                Action
                            </div>
                        </div>
                    </div>
                    <div className='bg-white w-full h-[0.05rem] bg-opacity-50'>
                    </div>
                    <div className='w-full mt-5 pb-5'>
                        <p className='text-l mb-1'>Synopsis</p>
                        <p className='text-sm text-gray_light'>{data.overview}</p>
                    </div>
                    <div>
                        <p className='text-l mb-1'>Related Movies</p>
                        {recommendation.map((recom) =>(
                            <div key={recom.id}>
                                <img src={`https://image.tmdb.org/t/p/original${recom.backdrop_path}`} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    );
};

export default Trending_show_img;
