import React from 'react';
import './about.css';

//NavButton
import Navbar from './../../Components/Navbar/Navbutton';
import NavItem from './../../Components/Navbar/NavItem';
import DropDownMenu from './../../Components/Navbar/Dropdown-nav';

function about() {
    return (
        <>
           <Navbar>
                <NavItem icon ="😅" >
                    <DropDownMenu />

                </NavItem>

            </Navbar>
            
          <h1>TESTING! THIS IS THE ABOUT PAGE!</h1>  
        </>
    )
}

export default about
