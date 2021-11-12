import React, { useState } from 'react';
import '../../hooks/useFirebase';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './Login.css';

const Login = () => {
    const [user , setUser] = useState({});
    const auth = getAuth();
    const signInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user)
        })
    }
    return (
        <div>
            <div className='w-25 mx-auto my-5'>
                <button className='btn btn-primary' onClick={signInUsingGoogle}>Google Log In</button>
            </div>
        </div>
    );
};

export default Login;