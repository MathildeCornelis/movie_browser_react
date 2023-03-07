import React from 'react';
import Title from '../component/Title';
import Menu from '../component/Menu';
import Research from '../component/Research';
import Category from '../component/Category';
import Category_show_film from '../component/Category_show_film';

const Search = () => {
    return (
        <>
            <Title />
            <Research />
            <Category />
            <Category_show_film />
            <Menu />
        </>
    );
};

export default Search;