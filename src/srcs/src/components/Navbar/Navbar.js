import React from 'react'

//import{FaBars} from 'react-icons/fa';

//Using CSS Styling components
import {
    Nav,
    NavbarContainer, 
	NavLogo, //MobileIcon, 
	NavMenu, 
	NavItem, 
	NavLinks,
} from './NavbarElements';

function Navbar() {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Zachary G.</NavLogo>
                </NavbarContainer>
                    

                <NavMenu>
                    <NavItem>
                        <NavLinks to="home">Home</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to="contact-me">Contact Me</NavLinks>
                    </NavItem>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar
