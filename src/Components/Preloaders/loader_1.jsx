import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animation from '../../Assets/animations/loader1.json'
import './loader_1.css';


class Preloader extends Component {
    state = { 
        isStopped: false,
        isPaused: false
     } 


    render() { 
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animation,
            rendererSettings: {
                preserveAspectRatio: 'xMidyMid slice'
            }
        };

        return (
        <div className='anim_container'>
            <Lottie options={defaultOptions} height={300} width={300} isStopped={this.state.isStopped} isPaused={this.state.isPaused} />
            <p className='loading_text'>Loading... Hang on Tight!</p>
        </div>);
    }
}
 
export default Preloader;