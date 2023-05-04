import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from '../utils/firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {


    const auth = getAuth(app)

    const user = { displayName: " Mahfuz " }

    const createUser = ( email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        user,
        createUser,
    }


    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;