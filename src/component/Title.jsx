import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../public/assets/TMDB.svg'

const Title = () => {

const [open, setOpen] = useState(true);
const displayValue = open ? 'none' : 'flex';
const [opacity, setOpacity] = useState(100);
const [translateY, setTranslateY] = useState(28);
const [translateY2, setTranslateY2] = useState(0);
const [rotateZ, setRotateZ] = useState(0);
const [rotateZ2, setRotateZ2] = useState(0);
const showMenu = () => {
    setOpen(!open)
    setOpacity(open ? 0 : 100);
    setTranslateY(open ? 14 : 28);
    setTranslateY2(open ? 14 : 0);
    setRotateZ(open ? 45 : 0);
    setRotateZ2(open ? -45 : 0)
}

    return (
        <section className='flex justify-start  pl-5 pt-7 pb-7 pr-5 text-2xl font-lato text-white bg-background xl:pl-10 xl:pt-14 xl:pb-14 xl:pr-10'>
            <h1 className='w-full flex flex-row justify-around xl:items-center'>
                <NavLink to='/' className='xl:w-1/2 xl:text-5xl xl:flex xl:items-center xl:ml-10'>
                    <span className='font-bold text-transparent bg-clip-text bg-gradient-to-t from-orange_dark to-orange_light'>
                        Movie
                    </span>
                    Browser
                </NavLink>
                <img src={logo} alt="logo api"  className='w-14 xl:hidden'/>
                <div onClick={showMenu} className='hidden xl:flex mr-10 w-14 h-8 cursor-pointer z-20 relative'>
                    <span style={{transform: `translateY(${translateY2}px) rotateZ(${rotateZ}deg)` }} className='xl:rounded-xl xl:absolute xl:w-full xl:h-1 xl:bg-white xl:transition xl:ease-in-out xl:delay-150'></span>
                    <span style={{opacity: opacity}} className='xl:rounded-xl xl:w-full xl:h-1 xl:bg-orange_light xl:ease-in-out xl:delay-150 xl:absolute xl:top-[45%]'></span>
                    <span style={{transform: `translateY(${translateY}px)  rotateZ(${rotateZ2}deg)`}} className='xl:rounded-xl xl:absolute xl:w-full xl:h-1 xl:bg-orange_dark xl:transition xl:ease-in-out xl:delay-150'></span>
                    
                </div>
            </h1>
            <div style={{display: displayValue}} className='flex-col justify-center items-center bg-input z-10 absolute w-[35%] right-0 top-0 h-full' >
                        <NavLink to="/" className='mt-5 hover:text-orange_dark'>
                            Home
                        </NavLink>
                        <NavLink to="/search" className='mt-5 hover:text-orange_dark'>
                            Search
                        </NavLink>
                        <NavLink to="/account" className='mt-5 hover:text-orange_dark'>
                            Account
                        </NavLink>
                        <img src={logo} alt="logo api"  className='w-24 mt-14'/>
                    </div>
        </section>
    );
};

export default Title;