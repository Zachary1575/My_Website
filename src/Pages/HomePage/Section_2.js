import React from 'react';
import { useRef } from 'react';
import { useIntersection } from 'react-use';
import gsap from "gsap";
import './Section_2.css';
import LABMAT from "./../../Assets/images/Matrix-icon.png";

function Section_2() {

    //Ref for our element
    const sectionRef = useRef(null);

    //Intersection Hook
    const Intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    });

    //Fade out and Fade in arrow functions.
    const fadeIn = element => {
        gsap.to(element, {
            opacity: 1,
            y: -60,
            ease:"power4.out",
            duration: 1,
            stagger:{
                amount:0.3
            }
        });

    };

    const fadeOut = element => {
        gsap.to(element, {
            opacity: 0,
            y: -20,
            ease:"power4.out",
            duration: 1
        })

    };
    

    Intersection && Intersection.intersectionRatio < 0.5
    ? fadeOut(".Section_2_fadeIn")
    : fadeIn(".Section_2_fadeIn");
    




  return (
      <section className="MainContent_Section_2">
          <div ref={sectionRef} className = "Section_2_inner">
              <h1 className="Section_2_fadeIn" id="Sec_2_h1">LET US TRY TO CODE THE DYNAMIC AND RESPONSIVE CONTENT FOR THIS SITE!!</h1>

              <div id="Sec_rect_2" className="Section_2_fadeIn" />

              <div className="Section_2_Inner_Div">
              <img className="Section_2_fadeIn" id="Sec_2_img" src={LABMAT} alt="Cannot_Display_Image!"></img>
              <p className="Section_2_fadeIn" id="Sec_2_p">
                  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
                  excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum 
                  quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat 
                  facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe 
                  eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus 
                  maiores alias consequatur aut perferendis doloribus asperiores repellat."
                  
                  
              </p>
              </div>
          </div>
      </section>
  )
}

export default Section_2