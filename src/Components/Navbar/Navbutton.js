import React from 'react';
import './Navbutton.css';


//import{FaBars} from 'react-icons/fa';


function Navbutton(props) {
    return (
        <>
            <div className = "Nav">
                <div className ="NavMenu">
                    <ul  className="navbar-nav">
                        { props.children }
                    </ul>

                </div>

            </div>
        </>
    )
}

export default Navbutton
