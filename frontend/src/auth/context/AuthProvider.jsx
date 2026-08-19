import { useState } from 'react'
import { loginService } from '../services/authService'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem('user_data');
        return stored ? JSON.parse(stored) : null;
    });

    const [loading, setLoading] = useState(false);


    const login = async (credentials) => {
        try {
            const data = await loginService(credentials);

            const userData = {
                username: data.username,
                email: data.email,
                role: data.role
            };

            localStorage.setItem('jwt_token', data.token);
            localStorage.setItem('user_data', JSON.stringify(userData));

            setUser(userData);

            return true;
        } catch (error) {
            console.error("Error en login:", error);
            return false;
        } finally {
            setLoading(false)
        }
    };

    const logout = () => {
        localStorage.removeItem('jwt_token');
        localStorage.removeItem('user_data');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );

}