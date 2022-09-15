import React from 'react';

const Review = (props) => {
    const{id,name}=props.review;
    return (
        <div>
            <p>Name: {name}</p>
        </div>
    );
};

export default Review;