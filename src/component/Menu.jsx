import React from 'react';

const menu = () => {
    return (
        <section className='w-full h-20 flex items-center'>
            <div className='w-full flex flex-row items-center justify-around'>
                <img src="src/assets/home_orange.png" alt="" className='w-12 h-12'/>
                <img src="src/assets/search_gray.png" alt="" className='w-8 h-9'/>
                <img src="src/assets/account_gray.png" alt="" className='w-8 h-9'/>
            </div>
        </section>
    );
};

export default menu;