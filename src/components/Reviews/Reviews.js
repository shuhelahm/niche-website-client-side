import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        const url = 'https://tranquil-bayou-51019.herokuapp.com/reviews';
        console.log(url)
        fetch(url)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    }, [])
    return (
        <div>
            <h1 className='text-center my-4'>Reviews</h1>
            {
                reviews.map(review=><Review
                key={review._id}
                review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;