import React from 'react';
import Spotlight from '../component/Spotlight';
import Title from '../component/Title';
import Trending from '../component/Trending';
import Menu from '../component/Menu';
const Home = () => {
    return (
        <>
            <Title />
            <Spotlight />
            <Trending />
            <Menu />
        </>
    );
};

export default Home;