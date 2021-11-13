import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    return (
        <div className='single-product'>
            <img className='w-100' src={product.img} alt="" />
            <h3>{product.name}</h3>
            <h4>Price: ${product.price}</h4>
            <p>{product.description}</p>
            <Link className='btn btn-primary' to={`/products/placeorder/${product._id}`}>Buy Now</Link>
        </div>

    );
};

export default Product;