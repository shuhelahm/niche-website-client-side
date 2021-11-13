import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState();
    useEffect(()=>{
        const url = 'https://tranquil-bayou-51019.herokuapp.com/reviews';
        console.log(url)
        fetch(url)
        .then(res=>res.json())
        .then(data=>console.log(data))
    }, [])
    return (
        <div>
            <h1 className='text-center my-4'>Reviews</h1>
            <h1>Reviews $</h1>
        </div>
    );
};

export default Reviews;