import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../components/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();

    const signInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user)
        })
    }

    const logOut = () =>{
        signOut(auth).then(() => {
            console.log('log out clicked')
            setUser({})
            console.log(user)
        });
    }

    const handleNameChange = e =>{
        setName(e.target.value)
    }
    const handleEmailChange = e =>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }

    const handleRegistrantion = e =>{
        e.preventDefault();
        
        createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setError('');
        })
        .catch(error=>{
            setError(error.message);
        })
    }

    const handleLogin = e =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
    const user = result.user;
    console.log(user)
  })
  .catch(error=>{
    setError(error.message);
})
    }

    return{
        user,
        logOut,
        signInUsingGoogle,
        handleRegistrantion,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleLogin,
        error,
        name
    }
}

export default useFirebase;
// 