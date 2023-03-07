import React, {useEffect, useState} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import axios from 'axios';
import Category_show_film from './category_show_film';

const Category = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [WheelGesturesPlugin()]); 
    const [category, setCategory] = useState([]);
    const [selectedGenreId, setSelectedGenreId] = useState(null);
    console.log(selectedGenreId);
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=0db63e7d578b1b7d392405ee14682954&language=en-US')
        .then(response => {
            setCategory(response.data.genres);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const handleClick = (event) =>{
        const genreId = event.currentTarget.id;
        setSelectedGenreId(genreId);
        console.log(genreId);
    }

    return (
        <section className='font-lato text-white mt-5 overflow-hidden'>
            <div ref={emblaRef} className='overflow-hidden'>
                <ul className='flex text-l'>
                    {category.map((genre, index) => (
                        <li key={index} className='ml-2 mr-2'><button id={genre.id} onClick={handleClick}>{genre.name}</button></li>
                    ))}
                </ul>
            </div>
            <Category_show_film genreId={selectedGenreId} />
        </section>
    );
};

export default Category;