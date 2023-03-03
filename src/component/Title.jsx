import React from 'react';

const Title = () => {
    return (
        <section className='flex justify-start pl-5 pt-7 pb-7 text-2xl font-lato text-white bg-background'>
            <h1 className='w-full flex flex-row'>
                <span className='font-bold text-transparent bg-clip-text bg-gradient-to-t from-orange_dark to-orange_light'>Movie</span>Browser
                <div className='w-1/2 flex justify-end'>
                    <img src="src/assets/TMDB.svg" alt="logo api"  className='w-1/3'/>
                </div>
            </h1>
        </section>
    );
};

export default Title;