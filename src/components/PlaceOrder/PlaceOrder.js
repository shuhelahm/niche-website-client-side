import React, {useEffect, useRef, useState} from 'react';
import { useParams } from 'react-router';
// import './PlaceOrder.css';

const PlaceOrder = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const [product, setProduct] = useState({});
    const {id} = useParams();
    useEffect( ()=>{
        const url = `https://tranquil-bayou-51019.herokuapp.com/products/${id}`;
        console.log(url)
        fetch(url)
        .then(res=> res.json())
        .then(data=>setProduct(data))
    }, []);

    const handlePlaceOrder = e =>{
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newOrder = {name, email};
        fetch('https://tranquil-bayou-51019.herokuapp.com/products', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then()
    }
    return (
        <div className='text-center my-5'>
            <h4>Place Order</h4>
                <form onSubmit={handlePlaceOrder}>
                    <p>Product id: {product._id}</p>
                    <p>Name: <input type="text" ref={nameRef}/></p>
                    <p>Email: <input type="email" name="" id="" ref={emailRef}/></p>
                    <input className='btn btn-primary' type="submit" value='submit'/>
                </form>
        </div>
    );
};

export default PlaceOrder;