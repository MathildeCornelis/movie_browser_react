import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import AccountIcon_svg from './AccountIcon_svg';
import HomeIcon_svg from './HomeIcon_svg';
import SearchIcon_svg from './SearchIcon_svg';

const menu = () => {

    const location = useLocation();
    
    const grandiant1_home = location.pathname !== '/' ?  'rgba(255, 255, 255, 0.25)' : '#FF9571';
    const grandiant2_home = location.pathname !== '/' ? 'rgba(255, 255, 255, 0.25)' : '#FA7556';

    const fillColor_search = location.pathname !== '/search' ? '#D9D9D9' : '#D9D9D9';
    const grandiant1_search = location.pathname !== '/search' ?  'rgba(255, 255, 255, 0.25)' : '#FF9571';
    const grandiant2_search = location.pathname !== '/search' ? 'rgba(255, 255, 255, 0.25)' : '#FA7556';
    
    const grandiant1_account = location.pathname !== '/account' ?  'rgba(255, 255, 255, 0.25)' : '#FF9571';
    const grandiant2_account = location.pathname !== '/account' ? 'rgba(255, 255, 255, 0.25)' : '#FA7556';

    return (
        <section className='w-full h-20 flex items-cente fixed bottom-0 right-0 bg-background xl:w-full'>
            <div className='w-full flex flex-row items-center justify-around'>
                <NavLink to='/'>
                    <HomeIcon_svg className="w-8 h-9" grandient1={grandiant1_home} grandient2={grandiant2_home}/>
                </NavLink>
                <NavLink to='/search' >
                    <SearchIcon_svg className="w-8 h-9" fillColor_search={fillColor_search} grandient1_search={grandiant1_search} grandient2_search={grandiant2_search}/>
                </NavLink>
                <NavLink to="/account">
                    <AccountIcon_svg className="w-8 h-9"  grandient1_account={grandiant1_account} grandient2_account={grandiant2_account}/>
                </NavLink>
            </div>
        </section>
    );
};

export default menu;