import React from 'react';
import Spotlight from '../component/Spotlight';
import Title from '../component/Title';
import Trending from '../component/Trending';

const Home = () => {
    return (
        <>
            <Title />
            <Spotlight />
            <Trending />
        </>
    );
};

export default Home;