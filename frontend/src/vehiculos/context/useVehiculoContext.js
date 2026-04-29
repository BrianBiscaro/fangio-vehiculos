import { useContext } from 'react';
import { VehiculoContext } from './VehiculoContext';

export const useVehiculoContext = () => {
    const context = useContext(VehiculoContext);
    if (!context) {
        throw new Error('useVehiculoContext must be used within a VehiculoProvider');
    }
    return context;
};

export default useVehiculoContext;