import React from 'react';
import './Home.css';
import { banner } from './Data';

//Sections
import HeroSection from './HeroSection'
import Section1 from './Section_1';
import Section2 from './Section_2';

//NavButton
import Navbar from './../../Components/Navbar/Navbutton';
import NavItem from './../../Components/Navbar/NavItem';
import DropDownMenu from './../../Components/Navbar/Dropdown-nav';



function Home() {
    return (
        <>  
            <Navbar>
                <NavItem icon ="😅" >
                    <DropDownMenu />
                </NavItem>
            </Navbar>

            <HeroSection {...banner} />
            <Section1 />
            <Section2 />
        </>
    )
}

export default Home
