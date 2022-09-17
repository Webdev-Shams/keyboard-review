import React from 'react';
import './Review.css'

const Review = (props) => {
    const{id,img,name,review,ratings}=props.review;
    return (
        <div className='reviewContainer mx-auto'>
            <p><img src={img} alt="" className='profileImg w-full' /></p>
            <p className='reviewTxt'>"{review}"</p>
            <p className='ratingsTxt'>{ratings}<span>&#9733;</span></p>
            <p className='nameTxt'>-{name}</p>
        </div>
    );
};

export default Review;