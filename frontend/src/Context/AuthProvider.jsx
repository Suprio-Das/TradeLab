import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleSignUpWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Auth Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe();
    }, [])

    const authInfo = {
        handleSignUpWithEmailAndPassword
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;