import React from 'react';
import ContentTemp from './ContentTemp';
import './Home.css';
import HeroSection from './HeroSection'
import { banner } from './Data';

function Home() {

  
    return (
        <>  
            <HeroSection {...banner} />
            <ContentTemp />
        </>
    )
}

export default Home
