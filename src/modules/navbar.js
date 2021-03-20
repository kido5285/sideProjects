import React from 'react';
import './module.css';
import Logo from '../images/logo.svg';
import Hamburger from '../images/icon-hamburger.svg';
import closeIcon from '../images/icon-close.svg';

function Navbar() {
    const expandNavbar = () => {
        var navigationBar = document.querySelector('.navLinks');
        console.log(navigationBar);
        navigationBar.classList.add('translate');
    }
    
    return (
        <nav>
            <img src={Hamburger} className="hamburger" onClick={expandNavbar}/>
            <img src={Logo} className="logo"/>
            <ul className="navLinks">
                <li className="navLink closeIcon">
                    <img src={closeIcon}/>
                </li>
                <li className="navLink">
                    home
                    <div className="line"></div>
                </li>
                <li className="navLink">
                    shop
                    <div className="line"></div>
                </li>
                <li className="navLink">
                    about
                    <div className="line"></div>
                </li>
                <li className="navLink">
                    contact
                    <div className="line"></div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;