import api from '../../services/axiosConfig';

// Instructor Service - maneja solo la lógica de API
export const instructorService = {
    // Obtener todos los instructores (admin)
    getAll: async () => {
        const response = await api.get('/api/admin/instructores');
        return response.data;
    },

    // Obtener instructores disponibles (público)
    getDisponibles: async () => {
        const response = await api.get('/api/public/instructores/disponibles');
        return response.data;
    },

    // Crear nuevo instructor (admin)
    create: async (data) => {
        const response = await api.post('/api/admin/instructores', data);
        return response.data;
    },

    // Actualizar instructor (admin)
    update: async (id, data) => {
        const response = await api.put(`/api/admin/instructores/${id}`, data);
        return response.data;
    },

    // Eliminar instructor (admin)
    delete: async (id) => {
        await api.delete(`/api/admin/instructores/${id}`);
    },

    // Obtener reservas próximas del instructor
    getProximasReservas: async () => {
        const response = await api.get('/api/instructor/reservas/proximas');
        return response.data;
    },

    // Obtener historial de reservas del instructor
    getHistorico: async () => {
        const response = await api.get('/api/instructor/reservas/historico');
        return response.data;
    },

    // Confirmar reserva (instructor)
    confirmarReserva: async (id) => {
        await api.post(`/api/instructor/reservas/${id}/confirmar`);
    },

    // Cancelar reserva (instructor)
    cancelarReserva: async (id) => {
        await api.post(`/api/instructor/reservas/${id}/cancelar`);
    },
};

export default instructorService;