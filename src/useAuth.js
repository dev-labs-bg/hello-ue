import { useState } from 'react';

export default function useAuth() {
    const getAuth = () => {
        const authString = localStorage.getItem('auth');
        const userAuth = JSON.parse(authString);
        return userAuth;
    }
    
    const saveAuth = userAuth => {
        localStorage.setItem('auth', JSON.stringify(userAuth));
        setAuth(userAuth);
    }
    
    const [auth, setAuth] = useState(getAuth());
    
    const removeAuth = () => {
        localStorage.removeItem('auth');
        setAuth(false);
    }
    
    return { 
        setAuth: saveAuth,
        removeAuth,
        auth
    }
}