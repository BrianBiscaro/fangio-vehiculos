import { useContext } from 'react';
import { PagoContext } from './PagoContext';

export const usePagoContext = () => {
    const context = useContext(PagoContext);
    if (!context) {
        throw new Error('usePagoContext must be used within a PagoProvider');
    }
    return context;
};

export default usePagoContext;