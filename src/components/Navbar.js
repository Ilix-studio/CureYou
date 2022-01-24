import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Button} from './Button.js';



export const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
      useEffect(() => {
        showButton();
      }, []);
    
      window.addEventListener('resize', showButton);



  return (
      <nav className='navbar'>
          <div className='navbar-container'>
          <Link to="/" className='nav-logo'>CureYou</Link>
         <div className='menu-icon' onClick={handleClick}>
             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
         </div>
         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
             <li className='nav-items'>
                 <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                     Home
                 </Link>
                 </li> 
                 <li className='nav-items'>
                 <Link to="/Services" className="nav-links" onClick={closeMobileMenu}>
                     Services
                 </Link>
                 </li> 
                 <li className='nav-items'>
                 <Link to="/Equip" className="nav-links" onClick={closeMobileMenu}>
                     Equipments
                 </Link>
                 </li> 
                 <li className='nav-items'>
                 <Link to="/Sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                     Sign-up
                 </Link>
                 </li> 
         </ul>
          </div>
      </nav>
  );
};



