import React from 'react';
import useAuth from '../../contexts/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Register.css';

const Register = () => {
    const {  handleRegistrantion, handleEmailChange, handlePasswordChange, handleNameChange, error } = useFirebase();
    return (
        <div className='registration-section'>
            <form onSubmit={handleRegistrantion}>
                <p>Name: <input className='w-100' onBlur={handleNameChange} id='name' type="text" name="" /></p>
                <p>Email: <input className='w-100' onBlur={handleEmailChange} id='email' type="email" name="" /></p>
                <p>Password: <input className='w-100' onBlur={handlePasswordChange} id='password' type="password" name="" /></p>
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
            <p className='text-danger'>{error}</p>
        </div>
    );
};

export default Register;