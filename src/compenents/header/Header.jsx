import React, { useState } from 'react';
import "./header.css";
import Logo from '../../assets/logo/nokka-logo.png'


// SCROLL

window.addEventListener('scroll', () => {
  const scrollableDiv = document.querySelector('.header');
  scrollableDiv.classList.toggle('scrolled', window.scrollY > 0);
});
const Header = () => {

  // TOGGLE MENU
  const [Toggle, showMenu] = useState(true);

  return (
    <header className="header scrolled">
      <nav className="nav header-container">

        <a href="index.html" className="logo"><img src={Logo} alt="" srcset="" /></a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>

          <ul className="nav__list grid">

            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#source" className="nav__link">
                Source
              </a>
            </li>

            <li className="nav__item">
              <a href="#gallery" className="nav__link">
                Gallery
              </a>
            </li>

            {/* <li className="nav__item">
              <a href="#news" className="nav__link">
                News
              </a>
            </li> */}

            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>



            <li className="nav__item">
              <a href="#contact-us" className="nav__link">Contact Us</a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>

        </div>
      </nav>
    </header>
  )
}

export default Header