import React, {useEffect, useState} from 'react';

const Spotlight = () => {
    return (
        <section className='w-full flex flex-col items-center'>
            <div className='w-11/12 rounded-xl relative'>
                <img src="src/assets/spotlight.png" alt="blabla" className='rounded-3xl'/>
            </div>
            <div className='w-7/12 h-16 flex flex-row items-center pl-5 bg-gray_light bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray_light border-opacity-50 absolute inset-y-52 inset-x-10 rounded-2xl'>
                <div className='w-10 h-10 flex items-center justify-center bg-gradient-to-r from-orange_dark to-orange_light rounded-3xl'>
                    <div class="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent"></div>
                </div>
                <div className='flex flex-col font-lato text-gray_light ml-6'>
                    <p className='text-sm'>Movie Spotlight</p>
                    <p className='text-white text-l'>Ready Player one</p>
                </div>
                
            </div>
        </section>
    );
};

export default Spotlight;