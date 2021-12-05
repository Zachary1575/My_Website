import React from 'react'
import './HeroSection.css';

function HeroSection({header, description, img, alt}) {
    return (
        <>
            <div className= "HeroContainer">
                <div className="Hero-img-wrapper">
                    <img src={img} alt={alt} className="home__hero-img"></img>
                </div>

                <div className="Hero-Class-Wrapper">
                    <h1>{header}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default HeroSection
