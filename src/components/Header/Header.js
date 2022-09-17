import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
            
        <div className='navbar'>
            <nav>
                <NavLink to="/home" className='navItem'>Home</NavLink>
                <NavLink to="/reviews" className='navItem'>Reviews</NavLink>
                <NavLink to="/dashboard" className='navItem'>Dashboard</NavLink>
                <NavLink to="/blog" className='navItem'>Blog</NavLink>
                <NavLink to="/about" className='navItem'>About</NavLink>
            </nav>
        </div>
        

    );
};

export default Header;