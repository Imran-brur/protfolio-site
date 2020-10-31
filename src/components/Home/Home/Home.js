import React from 'react';
import Header from '../../Sheared/Header/Header';
import HomePart from '../Homepart/HomePart';
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <Header></Header>
            <HomePart></HomePart>
        </div>
    );
};

export default Home;