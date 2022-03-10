import React, { useState, useEffect} from 'react';
import './Home.css';

//Sections
import Section1 from './Section_1';
import Section2 from './Section_2';
import TxtBreak from '../../Components/Text_comp/text-breaker'

//Test import
import HeroSections from './test1';

//NavButton
import Navbar from './../../Components/Navbar/Navbutton';
import NavItem from './../../Components/Navbar/NavItem';
import DropDownMenu from './../../Components/Navbar/Dropdown-nav';

//Preloader
import Loader from '../../Components/Preloaders/loader_1';

//Effects and Others
// Fade defaults, transDur = 400 and Delay = 50
import FadeIn from 'react-fade-in';




function Home() {

    //Loading states
    const [loading, setLoading] = useState(false);

    //Loader
    useEffect(() => {
        setLoading(true)

    //Wait 8 seconds
    setTimeout(() => {
        setLoading(false)
    }, 3000);

    }, [])

    //Texts
    const begin1 = "var about_Me = ( ) = > {";
    const begin2 = "let me = {";
    const TimeLoad1 = true;

    //Helper functions

    return (
        <>  
        {loading ? <Loader loading={loading} /> : (
        <div>
            <FadeIn transitionDuration={600} delay={0}>

            <Navbar>
                <NavItem icon ="😅" >
                    <DropDownMenu />
                </NavItem>
            </Navbar>

            <HeroSections />

            <TxtBreak Desc={begin1}/>
        
            <div className='main-content'>
                <Section1 />
                <Section2 />
            </div>

            </FadeIn>
        </div>
        )}
        </>
    )
}

export default Home
