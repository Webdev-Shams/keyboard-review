import React, { useEffect, useState } from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div>
            <div>
                <h1>Reviews</h1>
            </div>

            <div>
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