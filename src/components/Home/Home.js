import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import './Home.css';

const Home = () => {
    return (
        <div>
            {/* banner section */}
            <div>
                <div className='banner-section'>
                    <img className='w-100 banner-img' src="https://image.freepik.com/free-photo/blue-jeep-parking-public-zone_114579-4042.jpg" alt="" />
                </div>  
                <div>
                    <button className='explore-btn btn btn-primary' onClick=''>Explore</button>
                </div>
            </div>
            <Products></Products>
            <Reviews></Reviews>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;