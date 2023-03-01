import React from 'react';

const Trending = () => {
    return (
        <section className='w-full flex flex-col items-center pl-5 pt-7 pb-7 pr-5 text-xl'>
            <h2 className='font-lato text-white pr-[17rem]'>Trending</h2>
            <div className='w-2/3 h-80 mt-5 flex justify-center rounded-2xl bg-orange_light overflow-hidden'>
                    <img src="src/assets/starwars.png" alt="starwars" className='max-w-screen-sm pl-20'/>
            </div>
        </section>
    );
};

export default Trending;