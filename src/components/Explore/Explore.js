import React, { useEffect, useState } from 'react';
import MoreProduct from '../MoreProduct/MoreProduct';
import '../Products/Products.css';

const Explore = () => {
    const [moreProducts, setMoreProducts] = useState([]);
    useEffect(()=>{
        fetch('https://tranquil-bayou-51019.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setMoreProducts(data))
    }, [])
    return (
        <div>
            <h1 className='text-center my-4'>More Products</h1>
            <div id='products-section' className='products-section d-grid mx-auto my-5'>
                {
                    moreProducts.map(moreProduct=> <MoreProduct
                    key={moreProduct._id}
                    moreProduct={moreProduct}></MoreProduct>)
                }
            </div>
        </div>
    );
};

export default Explore;