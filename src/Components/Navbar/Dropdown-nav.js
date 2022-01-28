import React from 'react';
import './Dropdown-nav.css';


//Temporary Dropdown Menu Function
function DropDownMenu() {

    //Dropdown Item in Menu, Its a child of the parent
    function DropDownItem(props){
      return(
        <button className="menu-item">
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
  
        </button>
      );
    }
  
  
    return(
      <div className="dropdown">
        <DropDownItem leftIcon="!" rightIcon="?">Item 1</DropDownItem>
        <DropDownItem leftIcon="!" rightIcon="?">Item 2</DropDownItem>
        <DropDownItem leftIcon="!" rightIcon="?">Item 3</DropDownItem>
        <DropDownItem leftIcon="!" rightIcon="?">Item 4</DropDownItem>
        <DropDownItem leftIcon="!" rightIcon="?">Item 5</DropDownItem>
      </div>
    );
  }


  export default DropDownMenu;