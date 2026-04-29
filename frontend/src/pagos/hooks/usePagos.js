import { useState, useCallback } from 'react';
import pagoService from '../services/pagoService';

export const usePagos = () => {
    const [pagos, setPagos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Obtener todos los pagos (admin)
    const fetchPagos = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await pagoService.getAll();
            setPagos(data);
        } catch (err) {
            setError(err.response?.data?.message || 'Error al cargar pagos');
            console.error('Error fetching pagos:', err);
        } finally {
            setLoading(false);
        }
    }, []);

    // Obtener pago por ID
    const fetchPagoById = useCallback(async (id) => {
        setLoading(true);
        setError(null);
        try {
            const data = await pagoService.getById(id);
            return data;
        } catch (err) {
            setError(err.response?.data?.message || 'Error al cargar pago');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    // Crear preferencia de pago (público)
    const crearPreferencia = useCallback(async (reservaId) => {
        setLoading(true);
        setError(null);
        try {
            const data = await pagoService.crearPreferencia(reservaId);
            return data;
        } catch (err) {
            setError(err.response?.data?.message || 'Error al crear preferencia de pago');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    // Verificar pago (admin)
    const verificarPago = useCallback(async (id) => {
        setLoading(true);
        setError(null);
        try {
            const updated = await pagoService.verificar(id);
            setPagos(prev => prev.map(p => p.id === id ? updated : p));
            return updated;
        } catch (err) {
            setError(err.response?.data?.message || 'Error al verificar pago');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    // Obtener estado del pago
    const getEstadoPago = useCallback(async (preferenceId) => {
        setLoading(true);
        setError(null);
        try {
            const data = await pagoService.getEstado(preferenceId);
            return data;
        } catch (err) {
            setError(err.response?.data?.message || 'Error al obtener estado');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        pagos,
        loading,
        error,
        fetchPagos,
        fetchPagoById,
        crearPreferencia,
        verificarPago,
        getEstadoPago,
    };
};

export default usePagos;