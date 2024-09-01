import React, { createContext, useState, ReactNode } from 'react';
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
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<string | null>(null);

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

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
