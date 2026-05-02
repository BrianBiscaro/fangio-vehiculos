import { useState, useCallback } from 'react';
import { VehiculoContext } from './VehiculoContext';
import vehiculoService from '../services/vehiculoService';

export const VehiculoProvider = ({ children }) => {
    const [vehiculos, setVehiculos] = useState([]);
    const [vehiculoActual, setVehiculoActual] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);



    const fetchVehiculos = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await vehiculoService.getAll();
            setVehiculos(data);
        } catch (err) {
            setError(err.response?.data?.message || 'Error al cargar vehículos');
        } finally {
            setLoading(false);
        }
    }, []);
    // Obtener vehículos disponibles (público)
    const fetchDisponibles = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await vehiculoService.getDisponibles();
            setVehiculos(data);
        } catch (err) {
            setError(err.response?.data?.message || 'Error al cargar vehículos');
        } finally {
            setLoading(false);
        }
    }, []);

    // Crear nuevo vehículo (admin)
    const createVehiculo = useCallback(async (data) => {
        setLoading(true);
        setError(null);
        try {
            const newVehiculo = await vehiculoService.create(data);
            setVehiculos(prev => [...prev, newVehiculo]);
            return newVehiculo;
        } catch (err) {
            setError(err.response?.data?.message || 'Error al crear vehículo');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    // Actualizar vehículo (admin)
    const updateVehiculo = useCallback(async (id, data) => {
        setLoading(true);
        setError(null);
        try {
            const updated = await vehiculoService.update(id, data);
            setVehiculos(prev => prev.map(v => v.id === id ? updated : v));
            return updated;
        } catch (err) {
            setError(err.response?.data?.message || 'Error al actualizar vehículo');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    // Eliminar vehículo (admin)
    const deleteVehiculo = useCallback(async (id) => {
        setLoading(true);
        setError(null);
        try {
            await vehiculoService.delete(id);
            setVehiculos(prev => prev.filter(v => v.id !== id));
        } catch (err) {
            setError(err.response?.data?.message || 'Error al eliminar vehículo');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    // Seleccionar vehículo actual
    const seleccionarVehiculo = useCallback((vehiculo) => {
        setVehiculoActual(vehiculo);
    }, []);

    // Limpiar vehículo actual
    const clearVehiculoActual = useCallback(() => {
        setVehiculoActual(null);
    }, []);

    const value = {
        vehiculos,
        vehiculoActual,
        loading,
        error,
        fetchVehiculos,
        fetchDisponibles,
        createVehiculo,
        updateVehiculo,
        deleteVehiculo,
        seleccionarVehiculo,
        clearVehiculoActual,
    };

    return (
        <VehiculoContext.Provider value={value}>
            {children}
        </VehiculoContext.Provider>
    );
};

export default VehiculoProvider;