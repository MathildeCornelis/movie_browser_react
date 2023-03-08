import React, { useState } from 'react';

const Research = () => {

    const [searchFilm, setSearchFilm] = useState('');
    const handleChange = (event) => {
        setSearchFilm(event.target.value);
    }
    return (
        <section>
            <form className='flex justify-center' >
                <div class="relative w-11/12">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-white " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-3 pl-12 text-sm text-white rounded-2xl bg-gray-50  bg-input" placeholder="Sherlock Holmes" onChange={handleChange} required />
                </div>
            </form>
            <p>{searchFilm}</p>
        </section>
    );
};

export default Research;