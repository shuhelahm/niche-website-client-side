import React from 'react';

const Review = ({review}) => {
    return (
        <div>
            <h1 className='text-center'>Name: {review.name}</h1>
            <h3 className='text-center'>Address: {review.address}</h3>
            <p className='text-center'>Review: {review.comment}</p>
        </div>
    );
};

export default Review;