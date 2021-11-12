import React from 'react';
import './Product.css';

const Product = ({product}) => {
    return (
        <div className='single-product'>
            <img className='w-100' src={product.img} alt="" />
            <h3>{product.name}</h3>
            <h4>Price: ${product.price}</h4>
            <p>{product.description}</p>
            <button className='btn btn-primary'>Buy Now</button>
        </div>

    );
};

export default Product;