import { useState, useCallback } from 'react';
import instructorService from '../services/instructorService';

export const useInstructor = () => {
    const [instructores, setInstructores] = useState([]);
    const [reservas, setReservas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Obtener todos los instructores (admin)
    const fetchInstructores = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await instructorService.getAll();
            setInstructores(data);
        } catch (err) {
            setError(err.response?.data?.message || 'Error al cargar instructores');
            console.error('Error fetching instructores:', err);
        } finally {
            setLoading(false);
        }
    }, []);

    // Obtener instructores disponibles (público)
    const fetchDisponibles = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await instructorService.getDisponibles();
            setInstructores(data);
        } catch (err) {
            setError(err.response?.data?.message || 'Error al cargar instructores');
            console.error('Error fetching instructores:', err);
        } finally {
            setLoading(false);
        }
    }, []);

    // Crear nuevo instructor (admin)
    const createInstructor = useCallback(async (data) => {
        setLoading(true);
        setError(null);
        try {
            const newInstructor = await instructorService.create(data);
            setInstructores(prev => [...prev, newInstructor]);
            return newInstructor;
        } catch (err) {
            setError(err.response?.data?.message || 'Error al crear instructor');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    // Actualizar instructor (admin)
    const updateInstructor = useCallback(async (id, data) => {
        setLoading(true);
        setError(null);
        try {
            const updated = await instructorService.update(id, data);
            setInstructores(prev => prev.map(i => i.id === id ? updated : i));
            return updated;
        } catch (err) {
            setError(err.response?.data?.message || 'Error al actualizar instructor');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    // Eliminar instructor (admin)
    const deleteInstructor = useCallback(async (id) => {
        setLoading(true);
        setError(null);
        try {
            await instructorService.delete(id);
            setInstructores(prev => prev.filter(i => i.id !== id));
        } catch (err) {
            setError(err.response?.data?.message || 'Error al eliminar instructor');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    // Obtener reservas próximas del instructor
    const fetchProximasReservas = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await instructorService.getProximasReservas();
            setReservas(data);
        } catch (err) {
            setError(err.response?.data?.message || 'Error al cargar reservas');
            console.error('Error fetching reservas:', err);
        } finally {
            setLoading(false);
        }
    }, []);

    // Obtener historial de reservas del instructor
    const fetchHistorico = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await instructorService.getHistorico();
            setReservas(data);
        } catch (err) {
            setError(err.response?.data?.message || 'Error al cargar historial');
            console.error('Error fetching historico:', err);
        } finally {
            setLoading(false);
        }
    }, []);

    // Confirmar reserva (instructor)
    const confirmarReserva = useCallback(async (id) => {
        setLoading(true);
        setError(null);
        try {
            await instructorService.confirmarReserva(id);
            setReservas(prev => prev.map(r => r.id === id ? { ...r, estado: 'confirmada' } : r));
        } catch (err) {
            setError(err.response?.data?.message || 'Error al confirmar reserva');
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
            await instructorService.cancelarReserva(id);
            setReservas(prev => prev.filter(r => r.id !== id));
        } catch (err) {
            setError(err.response?.data?.message || 'Error al cancelar reserva');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        instructores,
        reservas,
        loading,
        error,
        fetchInstructores,
        fetchDisponibles,
        createInstructor,
        updateInstructor,
        deleteInstructor,
        fetchProximasReservas,
        fetchHistorico,
        confirmarReserva,
        cancelarReserva,
    };
};

export default useInstructor;