import React from 'react';

const Review = (props) => {
    const{id,img,name,review,ratings}=props.review;
    return (
        <div>
            <p><img src={img} alt="" /></p>
            <p>Name: {name}</p>
            <p>Review: {review}</p>
            <p>Ratings: {ratings}</p>
        </div>
    );
};

export default Review;