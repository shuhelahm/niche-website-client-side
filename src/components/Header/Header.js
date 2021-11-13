import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
// import useAuth from '../../contexts/useAuth';
import './Header.css';

const Header = () => {
  const { user, logOut } = useFirebase();

  
  // console.log(user)
    return (
  <div className='nav-section'>
  <Navbar className='nav-bar mx-auto container' sticky="top" collapseOnSelect expand="md" bg="primary" variant="dark">
    <Navbar.Brand as={Link} to='/home'>Car Bd</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link className='text-white' as={Link} to="/home">Home</Nav.Link>
      <Nav.Link className='text-white'  as={Link} to="/products">Products</Nav.Link>
      <Nav.Link className='text-white' as={Link} to="/reviews">Reviews</Nav.Link>
      <Nav.Link className='text-white' as={Link} to="/aboutus">About Us</Nav.Link>
      <Nav.Link className='text-white' as={Link} to="/register">Register</Nav.Link>
      { user.email ? <button onClick={logOut}>Log out</button> : <Nav.Link className='text-white' as={Link} to="/login">Login</Nav.Link> 
      } 
      { user.email ?? <Nav.Link className='text-white' as={Link} to="/dashboard">Dashboard</Nav.Link>
      } 
      
    </Navbar.Collapse>
  </Navbar> 
</div>
    );
};

export default Header;