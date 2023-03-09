import React, {useEffect, useState} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import axios from 'axios';
import Category_show_film from './Category_show_film';

const Category = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [WheelGesturesPlugin()]); 
    const [category, setCategory] = useState([]);
    const [selectedGenreId, setSelectedGenreId] = useState(null);
    const [searchFilm, setSearchFilm] = useState('');
    
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=0db63e7d578b1b7d392405ee14682954&language=en-US')
        .then(response => {
            setCategory(response.data.genres);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const handleChange = (event) => {
        const displayFilm = event.target.value;
        setSearchFilm(displayFilm);
    }
    const handleClick = (event) =>{
        const genreId = event.currentTarget.id;
        setSelectedGenreId(genreId);
    }

    return (
        <div>
            <form className='flex justify-center' >
                <label htmlfor="default-search" class="mb-2 text-sm font-medium sr-only">Search</label>
                <div class="relative w-11/12">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-white " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-3 pl-12 text-sm text-white rounded-2xl bg-gray-50  bg-input" placeholder="Sherlock Holmes" onChange={handleChange} required />
                </div>
            </form>
            <section className='font-lato text-white mt-5 overflow-hidden'>
                <div ref={emblaRef} className='overflow-hidden'>
                    <ul className='flex text-l'>
                        {category.map((genre, index) => (
                            <li key={index} className='ml-2 mr-2 min-w-fit xl:text-xl hover:font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-t hover:from-orange_dark hover:to-orange_light'><button id={genre.id} onClick={handleClick}>{genre.name}</button></li>
                        ))}
                    </ul>
                </div>
            </section>
            <Category_show_film genreId={selectedGenreId} displayFilm={searchFilm} />
        </div>
    );
};

export default Category;