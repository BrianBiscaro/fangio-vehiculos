import { useContext } from 'react';
import { ReservaContext } from './ReservaContext';

export const useReservaContext = () => {
    const context = useContext(ReservaContext);
    if (!context) {
        throw new Error('useReservaContext must be used within a ReservaProvider');
    }
    return context;
};

export default useReservaContext;