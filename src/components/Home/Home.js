import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <div className='welcomeTxt'>
                <h1>Lit up your Gaming Experience with</h1>
                <h1>Awesome Keyboard</h1>
            </div>
            <div className='keyboardImg'>
                <img src="https://free3d.com/imgd/l91/5f61d7b29d7cea638d7f2be2/2578-low-profile-mechanical-keyboard.png" alt="" />
            </div>
            <div>
                {
                    reviews.slice(0,3).map(review =>
                        <Review
                        key={review.id}
                        review={review}
                        >
                        </Review>
                    )
                }

                <Link to="/reviews">
                    <button>See more</button>
                </Link>

            </div>
        </div>
    );
};

export default Home;