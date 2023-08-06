import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
         <ul>
          <li><NavLink to="/" className={ ({isActive}) => (isActive? "activeClass" : "notActiveClass" ) } > Home</NavLink></li>
          <li><NavLink to="/student" className={ ({isActive}) => (isActive? "activeClass" : "notActiveClass" ) }  >Student</NavLink></li>
          <li><NavLink to="/contact" className={ ({isActive}) => (isActive? "activeClass" : "notActiveClass" ) } >ContactUs</NavLink></li>
         </ul>
    </nav>
  );
};

export default Header;
