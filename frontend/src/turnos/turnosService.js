import api from '../services/axiosConfig';

export const getTurnosDisponibles = async () => {
    const response = await api.post('/publica/turnos');
    return response.data;
}

export const crearReserva = async (datos) => {
    const response = await api.post('/publica/turnos/reservar', datos);
    return response.data;
}

export const cancelarReserva = async (datos) => {
    const response = await api.post('/publica/turnos/cancelar', datos);
    return response.data;
}
