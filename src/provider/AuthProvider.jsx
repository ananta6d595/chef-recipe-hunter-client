import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from '../utils/firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {


    const auth = getAuth(app)

    const user = { displayName: " Mahfuz " }

    const createUser = ( email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName:  name,
            photoURL:  photoURL,
        })
    }

    const authInfo = {
        user,
        createUser,
        signInUser,
        updateUserProfile,
    };


    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;