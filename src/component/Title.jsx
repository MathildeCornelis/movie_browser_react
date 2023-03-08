import React from 'react';

const Title = () => {
    return (
        <section className='flex justify-start pl-5 pt-7 pb-7 text-2xl font-lato text-white bg-background xl:pl-10 xl:pt-14 xl:pb-14 xl:pr-10'>
            <h1 className='w-full flex flex-row'>
                <p className='xl:w-1/2 xl:text-5xl xl:flex xl:items-center xl:ml-10'>
                    <span className='font-bold text-transparent bg-clip-text bg-gradient-to-t from-orange_dark to-orange_light'>
                        Movie
                    </span>
                    Browser
                </p>
                <div className='w-1/2 flex justify-end'>
                    <img src="src/assets/TMDB.svg" alt="logo api"  className='w-1/3 xl:w-28 xl:mr-14'/>
                </div>
            </h1>
        </section>
    );
};

export default Title;