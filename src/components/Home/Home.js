import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div className='grid grid-cols-1 items-center text-center md:text-left lg:text-left  font-bold text-2xl md:text-3xl lg:text-4xl mx-auto tracking-wider'>
                    <div className='mb-9'>
                        <h1>Unleash <br></br>Your <span className='font-extrabold'> Beast </span> Mode with <br></br><span className='keyBoard font-black'> Awesome Keyboard!</span></h1>
                        
                    </div>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nJTIwa2V5Ym9hcmR8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                </div>
            </div>

            
            <div>
                <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl mt-16 mb-9'>What Our Customers Say?</h1>    
            </div>  
            <div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
                    {
                        reviews.slice(0,3).map(review =>
                                <Review
                                key={review.id}
                                review={review}
                                >
                                </Review>
                        )
                    }
                </div>
                <Link to="/reviews">
                    <button className='seeMoreBtn'>See more</button>
                </Link>
            </div>
            
            
        </div>
    );
};

export default Home;