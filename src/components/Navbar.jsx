import React, { useState } from 'react';
import '../styles/navbar.css'
import About from './About';
const Navbar = ({ id1, id2, id3, id4 }) => {

  const [isVisible, setIsVisible] = useState(true);
  return (
    <header className='navbar_container'>
      <img src="https://www.pngall.com/wp-content/uploads/2/Rocket-PNG-Pic.png" className='nav_logo' />
      <div className="nav_hambur" onClick={() => setIsVisible(!isVisible)}>
        <div className="hambur_item"></div>
        <div className="hambur_item"></div>
        <div className="hambur_item"></div>
      </div>
      <nav className='nav_list_container'>
        <ul className={isVisible ? 'nav_list' : 'nav_list active'}>
          <li className='nav_li'><a href="#" className='nav_item'>Inicio</a></li>
          <li className='nav_li'><a href='#' className='nav_item'>Sobre mi</a></li>
          <li className='nav_li'><a href="#" className='nav_item'>Proyectos</a></li>
          <li className='nav_li'><a href="#" className='nav_item select'>Contáctame</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;