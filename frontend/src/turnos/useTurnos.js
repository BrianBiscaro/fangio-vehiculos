import { useContext } from 'react';
import { TurnosContext } from './TurnosContext'

export const useTurnos = () => {
    const context = useContext(TurnosContext);
    if (!context) {
        throw new Error('useTurnos must be used within a TurnosProvider');
    }
    return context;
};
