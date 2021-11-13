import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Dashboard.css';

const Dashboard = () => {
    const {logOut} = useFirebase();
    return (
        <div>
            <h2 className='my-3 text-center'>Dashboard</h2>
            <div className='w-50 mx-auto dashboard-section'>
                <Link className='mx-2' to='/pay'>Pay</Link>
                <Link className='mx-2' to='/myorders'>My Orders</Link>
                <Link className='mx-2' to='/addreviews'>Review</Link>
                <button className='btn btn-primary mx-2' onClick={logOut}>Logout</button>
            </div>
        </div>
    );
};

export default Dashboard;