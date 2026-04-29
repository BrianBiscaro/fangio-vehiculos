import { useState, useCallback } from 'react';
import vehiculoService from '../services/vehiculoService';

export const useVehiculos = () => {
    const [vehiculos, setVehiculos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Obtener todos los vehículos (admin)
    const fetchVehiculos = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await vehiculoService.getAll();
            setVehiculos(data);
        } catch (err) {
            setError(err.response?.data?.message || 'Error al cargar vehículos');
            console.error('Error fetching vehiculos:', err);
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
            console.error('Error fetching vehiculos:', err);
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

    return {
        vehiculos,
        loading,
        error,
        fetchVehiculos,
        fetchDisponibles,
        createVehiculo,
        updateVehiculo,
        deleteVehiculo,
    };
};

export default useVehiculos;