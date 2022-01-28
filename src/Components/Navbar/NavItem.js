import React, { useState } from "react";
import './NavItem.css';


function NavItem (props) {

    //Use State function, boolean value is state which tells if it is open or not, setOpen is a function. setOpen is the handler of the event listener (OnClick)
    const [open, setOpen] = useState();
  
    return (
        <li className = "nav-item">
            <button href = "#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </button>
  
            {open && props.children}
        </li>
    );
  }

  export default NavItem;