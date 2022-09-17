import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import './notFound.css'

const NotFound = () => {
    return (
        <div className='notFoundContainer grid grid-cols-1 items-center font-bold'>
            <h1 className='notFoundTxt font-sans text-5xl'>PAGE NOT FOUND!<br></br>
            <Link to="/Home">
                <span>proceed to homepage--></span>
            </Link>
            </h1>
            
        </div>
    );
};

export default NotFound;