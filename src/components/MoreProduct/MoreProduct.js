import React from 'react';
import { Link } from 'react-router-dom';
import '../Product/Product.css';

const MoreProduct = ({moreProduct}) => {
    return (
        <div className='single-product'>
            <img className='w-100' src={moreProduct.img} alt="" />
            <h3>{moreProduct.name}</h3>
            <h4>Price: ${moreProduct.price}</h4>
            <p>{moreProduct.description}</p>
            <Link className='btn btn-primary' to={`/products/placeorder/${moreProduct._id}`}>Buy Now</Link>
        </div>
    );
};

export default MoreProduct;