import React, { useEffect, useState } from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div>
             <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl mt-9 mb-9'>Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
                {
                    reviews.map(review =>
                        <Review
                        key={review.id}
                        review={review}
                        >
                        </Review>
                    )
                }
            </div>
            
        </div>
    );
};

export default Reviews;