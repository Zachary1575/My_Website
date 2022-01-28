import React from 'react';
import { useRef } from 'react';
import { useIntersection } from 'react-use';
import gsap from "gsap";
import './Section_1.css';
import profilePhoto from "./../../Assets/images/sample1.svg"

function ContentTemp() {

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
      ? fadeOut(".Section_1_fadeIn")
      : fadeIn(".Section_1_fadeIn");
      
  
  


    return (
        <section className="MainContent_Section_1">
            <div ref={sectionRef} className = "Section_1_inner">
                <h1 className="Section_1_fadeIn" id="Sec_1_h1">LET US TRY TO CODE THE DYNAMIC AND RESPONSIVE CONTENT FOR THIS SITE!!</h1>

                <div id="Sec_rect_1" className="Section_1_fadeIn" />

                <div className="Section_1_Inner_Div">
                <img className="Section_1_fadeIn" id="Sec_1_img" src={profilePhoto} alt="Cannot_Display_Image!"></img>
                <p className="Section_1_fadeIn" id="Sec_1_p">
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

export default ContentTemp
