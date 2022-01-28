import React from 'react'
import './HeroSection.css';
import banner from "./../../Assets/images/banner.svg"

function HeroSection({header, description, alt}) {
    return (
        <>
            <div className= "HeroContainer">
                <div className="Hero-img-wrapper">
                    <img src={banner} alt={alt} className="home__hero-img"></img>
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
