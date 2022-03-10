import React, { useState, useEffect } from 'react';
import './text-breaker.css';
import ReactVisibilitySensor from 'react-visibility-sensor';
import TypeWriterEffect from 'react-typewriter-effect';

function textBreaker ({Desc}) {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [look, setLook] = useState(true);


    //Use effect hooks
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setLook(true);
        console.log("ran!");
      return () => {
      }
    }, [])
    
    

    return (
            <div className='Outer-Cont'>
                <div className='Outer-text'>

                <ReactVisibilitySensor active={look}>
                {({isVisible}) => <div>{isVisible ? <TypeWriterEffect text={Desc}  /> : '.' }</div>}
                </ReactVisibilitySensor>
                </div>
            </div>
    );
    
}
 
export default textBreaker;