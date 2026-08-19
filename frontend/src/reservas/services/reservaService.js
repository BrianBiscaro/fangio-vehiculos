import api from '../../services/axiosConfig';

// Reserva Service - maneja solo la lógica de API
export const reservaService = {
    // Obtener reservas del admin con filtro
    getAll: async (filtro = 'todas') => {
        const endpoint = filtro === 'todas'
            ? '/api/admin/reservas'
            : `/api/admin/reservas?estado=${filtro}`;
        const response = await api.get(endpoint);
        return response.data;
    },

    // Obtener horarios disponibles para fecha y vehículo
    getHorariosDisponibles: async (fecha, vehiculoId) => {
        const response = await api.get(
            `/api/public/reservas/disponibles?fecha=${fecha}&vehiculoId=${vehiculoId}`
        );
        return response.data;
    },

    // Obtener instructores disponibles
    getInstructoresDisponibles: async () => {
        const response = await api.get('/api/public/instructores/disponibles');
        return response.data;
    },

    // Crear reserva pública
    create: async (data) => {
        const response = await api.post('/api/public/reservas', data);
        return response.data;
    },

    // Actualizar estado de reserva (admin)
    updateEstado: async (id, estado) => {
        const response = await api.patch(`/api/admin/reservas/${id}/estado`, { estado });
        return response.data;
    },

    // Obtener reserva por ID
    getById: async (id) => {
        const response = await api.get(`/api/public/reservas/${id}`);
        return response.data;
    },

    // Cancelar reserva (instructor)
    cancelar: async (id) => {
        await api.post(`/api/instructor/reservas/${id}/cancelar`);
    },
};

export default reservaService;