import React from 'react'
import './nav.css'
import Logo from '../../assets/logo.webp'

const Nav = () => {
    return (
        <div>
            <div className="nav__above">
                <p>This webpage is an implementation of sustainable design principles</p>
            </div>
            <nav>
                <img src={Logo} alt="logo" />
                <div className="nav-links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
