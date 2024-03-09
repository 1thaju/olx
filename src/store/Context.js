import { createContext, useState } from 'react';

export const FirebaseContext = createContext();

export const AuthContext = createContext(null)


export default function Context ({children}) {
    const [userName,setUserName] = useState('')
    return(
        <AuthContext.Provider value = {{userName,setUserName}}>
            {children}
        </AuthContext.Provider>
    )
}