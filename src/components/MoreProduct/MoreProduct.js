import React from 'react';
import '../Product/Product.css';

const MoreProduct = ({moreProduct}) => {
    return (
        <div className='single-product'>
            <img className='w-100' src={moreProduct.img} alt="" />
            <h3>{moreProduct.name}</h3>
            <h4>Price: ${moreProduct.price}</h4>
            <p>{moreProduct.description}</p>
            <button className='btn btn-primary'>Buy Now</button>
        </div>
    );
};

export default MoreProduct;