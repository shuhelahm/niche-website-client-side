import React, { useRef } from 'react';
import useFirebase from '../../hooks/useFirebase';

const AddReviews = () => {
    const nameRef = useRef();
    const addressRef = useRef();
    const commentRef = useRef();
    const {user} = useFirebase();
    const handleAddReviews = e =>{
        e.preventDefault();
        const name = nameRef.current.value;
        const address = addressRef.current.value;
        const comment = commentRef.current.value;
        const newReview = {name, address, comment};
        fetch ('https://tranquil-bayou-51019.herokuapp.com/reviews', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
        .then()
    }
    return (
        <div>
            <h2 className='text-center my-3'>Add reviews: </h2>
            <div className='w-75 mx-auto'>
                <form onSubmit={handleAddReviews}>
                    <p><input ref={nameRef} className='w-100' type="text" name="" id="" placeholder='Name'/></p>
                    <p><input ref={addressRef} className='w-100' type="text" name="" id="" placeholder='Address'/></p>
                    <textarea ref={commentRef} placeholder='Add review' className='w-100' name="" id="" cols="30" rows="4"></textarea>
                    <input className='btn btn-primary' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default AddReviews;