import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://tranquil-bayou-51019.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <h1 className='text-center my-4'>Products</h1>
            <div id='products-section' className='products-section d-grid w-75 mx-auto my-5'>
                {
                    products.slice(0,6).map(product=> <Product
                    key={product._id}
                    product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;