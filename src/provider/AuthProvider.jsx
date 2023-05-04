import React, { createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const authInfo = {}


    return (

        <AuthContext.Provider value={authInfo}>

        </AuthContext.Provider>
    );
};

export default AuthProvider;