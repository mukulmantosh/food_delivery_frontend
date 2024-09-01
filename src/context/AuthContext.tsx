import React, {createContext, useState, ReactNode, useEffect} from 'react';
import { jwtDecode } from "jwt-decode";

interface User {
    name: string
}

interface AuthContextType {
    isAuthenticated: boolean;
    user: string | null;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    // const [user, setUser] = useState<string | null>(null);

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => !!localStorage.getItem('token'));
    const [user, setUser] = useState<string | null>(() => {
        const token = localStorage.getItem('token');
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const decodedToken: User = jwtDecode(token);
            return token ? decodedToken.name : null;
        }catch{
            return null;
        }
    });


    const login = (token: string) => {
        const decodedToken: User = jwtDecode(token);
        setIsAuthenticated(true);
        setUser(decodedToken.name);
        localStorage.setItem('token', token);

    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('token');
    };

    useEffect(() =>{
    }, [isAuthenticated]);

    const value = { isAuthenticated, user, login, logout };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
