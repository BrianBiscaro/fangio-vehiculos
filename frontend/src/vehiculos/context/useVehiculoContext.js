import { useContext } from 'react';
import { VehiculoContext } from './VehiculoContext';

export const useVehiculoContext = () => {
    const context = useContext(VehiculoContext);
    return context;
};

export default useVehiculoContext;