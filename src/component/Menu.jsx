import React from 'react';
import { NavLink } from 'react-router-dom';
import home from '../../public/assets/home.svg';
import search from '../../public/assets/search.svg'

const menu = () => {
    return (
        <section className='w-full h-20 flex items-cente fixed bottom-0 right-0 bg-background'>
            <div className='w-full flex flex-row items-center justify-around'>
                <NavLink to='/'>
                    <img src={home} alt="" className='w-8 h-9'/>
                </NavLink>
                <NavLink to='/search'>
                    <img src={search} alt="" className='w-9 h-9'/>
                </NavLink>
                <NavLink to="/">
                    <img src="src/assets/account_gray.png" alt="" className='w-8 h-9'/>
                </NavLink>
            </div>
        </section>
    );
};

export default menu;