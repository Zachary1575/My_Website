import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

//Our CSS styled nav that will be exported to the index.js for Navbar.
export const Nav = styled.nav`
	background: #1c1c1c;
	height: 55px;
	/*margin-top: -80px;*/
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 960) {
		transition: 0.8s all ease;
	}
`;

// We make another Css component for Navbar container, this will contain EVERYTHING for Navbar
export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 80%;
	padding: 0 24px;

`;

//The Logo and the Logo link
export const NavLogo = styled(LinkR)`
	color: #fff;
	justify-self: flex-start;
	cursor: pointer;
	font-size: 1.5rem;
	display:flex;
	align-items: center;
	margin-left: 24px;
	font-weight: bold;
	text-decoration: none;

`;

//The Menu that holds all the elements of Navbar Items
export const NavMenu = styled.ul`
	display: flex;
	algin-items: center;
	list-style: none;
	text-align: center;

	/*Hides the Navbar Compnents when screen schriks to 768px*/
	@media screen and (max-width: 768px){
		display: none;
	}

`;

//Each Individual item on the navbar such as about, services, etc
export const NavItem = styled.li`
	height: 80px;

`;

//The working Links for the Navbar Items
export const NavLinks = styled(LinkS)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	/*Highlights the link as green*/
	&.active{
		border-bottom: 3px solid #01bf71;
	}
`;

//The CSS for the Mobile Icon that we import
export const MobileIcon = styled.div`
	/*We display nothing when it is full screen or desktop view*/
	diplay: none;

	/* This will display the mobile view once we hit a certain breakpoint */
	@media screen and (max-width: 768px){
		display:block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: #fff;

	}

`;