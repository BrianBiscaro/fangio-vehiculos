import { useState, useCallback } from 'react';
import { ReservaContext } from './ReservaContext';
import reservaService from '../services/reservaService';

export const ReservaProvider = ({ children }) => {
    const [reservas, setReservas] = useState([]);
    const [reservaActual, setReservaActual] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Obtener reservas del admin con filtro
    const fetchReservas = useCallback(async (filtro = 'todas') => {
        setLoading(true);
        setError(null);
        try {
            const data = await reservaService.getAll(filtro);
            setReservas(data);
        } catch (err) {
            setError(err.response?.data?.message || 'Error al cargar reservas');
        } finally {
            setLoading(false);
        }
    }, []);

    // Obtener horarios disponibles para fecha y vehículo
    const fetchHorariosDisponibles = useCallback(async (fecha, vehiculoId) => {
        setLoading(true);
        setError(null);
        try {
            const data = await reservaService.getHorariosDisponibles(fecha, vehiculoId);
            return data;
        } catch (err) {
            setError(err.response?.data?.message || 'Error al cargar horarios');
            return [];
        } finally {
            setLoading(false);
        }
    }, []);

    // Obtener instructores disponibles
    const fetchInstructoresDisponibles = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await reservaService.getInstructoresDisponibles();
            return data;
        } catch (err) {
            setError(err.response?.data?.message || 'Error al cargar instructores');
            return [];
        } finally {
            setLoading(false);
        }
    }, []);

    // Crear reserva pública
    const createReserva = useCallback(async (data) => {
        setLoading(true);
        setError(null);
        try {
            const newReserva = await reservaService.create(data);
            return newReserva;
        } catch (err) {
            setError(err.response?.data?.message || 'Error al crear reserva');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    // Actualizar estado de reserva (admin)
    const updateEstado = useCallback(async (id, estado) => {
        setLoading(true);
        setError(null);
        try {
            const updated = await reservaService.updateEstado(id, estado);
            setReservas(prev => prev.map(r => r.id === id ? updated : r));
            return updated;
        } catch (err) {
            setError(err.response?.data?.message || 'Error al actualizar estado');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    // Obtener reserva por ID
    const fetchReservaById = useCallback(async (id) => {
        setLoading(true);
        setError(null);
        try {
            const data = await reservaService.getById(id);
            setReservaActual(data);
            return data;
        } catch (err) {
            setError(err.response?.data?.message || 'Error al cargar reserva');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    // Cancelar reserva (instructor)
    const cancelarReserva = useCallback(async (id) => {
        setLoading(true);
        setError(null);
        try {
            await reservaService.cancelar(id);
            setReservas(prev => prev.filter(r => r.id !== id));
        } catch (err) {
            setError(err.response?.data?.message || 'Error al cancelar reserva');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    // Limpiar reserva actual
    const clearReservaActual = useCallback(() => {
        setReservaActual(null);
    }, []);

    const value = {
        reservas,
        reservaActual,
        loading,
        error,
        fetchReservas,
        fetchHorariosDisponibles,
        fetchInstructoresDisponibles,
        createReserva,
        updateEstado,
        fetchReservaById,
        cancelarReserva,
        clearReservaActual,
    };

    return (
        <ReservaContext.Provider value={value}>
            {children}
        </ReservaContext.Provider>
    );
};

export default ReservaProvider;