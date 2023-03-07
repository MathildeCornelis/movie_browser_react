import React, {useEffect, useState} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import axios from 'axios';

const Category = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [WheelGesturesPlugin()]); 
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=0db63e7d578b1b7d392405ee14682954&language=en-US')
        .then(response => {
            setCategory(response.data.genres);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const handleClick = event =>{
        console.log(event.currentTarget.id);
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
        </section>
    );
};

export default Category;