import React, { Component } from 'react';
//Use react-scroll-parallax for parallax effect.
import { ParallaxBanner  } from 'react-scroll-parallax';
import './HeroSection.css';
import BannerImage from './../../Assets/images/banner.svg';

class HeroSection extends Component {
    

    render() { 
        

        return (
            <React.Fragment>
                <ParallaxBanner className='header-background' layers={[{ image: `${BannerImage}`, speed: -50 }]} >
                <div className="info-container">
                    <h1 className="text">Hello World!</h1>
                </div>
                </ParallaxBanner>
            </React.Fragment>
        );
    }
}
 
export default HeroSection;