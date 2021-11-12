import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div>
  <Navbar bg="primary" variant="dark" className='nav-bar mx-auto' sticky="top" collapseOnSelect expand="md">
    <Container>
    <Navbar.Brand href="#home">Car Bd</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Products</Nav.Link>
      <Nav.Link href="#pricing">Reviews</Nav.Link>
      <Nav.Link href="#pricing">Review</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
            </div>
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