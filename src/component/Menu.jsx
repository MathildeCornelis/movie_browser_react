import React from 'react';
import { NavLink } from 'react-router-dom';

const menu = () => {
    return (
        <section className='w-full h-20 flex items-center'>
            <div className='w-full flex flex-row items-center justify-around'>
                <NavLink to='/'>
                    <img src="src/assets/home_orange.png" alt="" className='w-8 h-9'/>
                </NavLink>
                <NavLink to='/search'>
                    <img src="src/assets/search_gray.png" alt="" className='w-9 h-9'/>
                </NavLink>
                <NavLink to="/">
                    <img src="src/assets/account_gray.png" alt="" className='w-8 h-9'/>
                </NavLink>
            </div>
        </section>
    );
};

export default menu;