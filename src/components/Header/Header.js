import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
            
        <div className='navbar'>
            <nav>
                <Link to="/home" className='navItem'>Home</Link>
                <Link to="/reviews" className='navItem'>Reviews</Link>
                <Link to="/dashboard" className='navItem'>Dashboard</Link>
                <Link to="/blog" className='navItem'>Blog</Link>
                <Link to="/about" className='navItem'>About</Link>
            </nav>
        </div>
        

    );
};

export default Header;