import api from '../../services/axiosConfig';

// Pago Service - maneja solo la lógica de API
export const pagoService = {
    // Obtener todos los pagos (admin)
    getAll: async () => {
        const response = await api.get('/api/admin/pagos');
        return response.data;
    },

    // Obtener pago por ID
    getById: async (id) => {
        const response = await api.get(`/api/admin/pagos/${id}`);
        return response.data;
    },

    // Crear preferencia de pago (público)
    crearPreferencia: async (reservaId) => {
        const response = await api.post('/api/public/pagos/crear-preferencia', {
            reservaId
        });
        return response.data;
    },

    // Verificar pago (admin)
    verificar: async (id) => {
        const response = await api.post(`/api/admin/pagos/${id}/verificar`);
        return response.data;
    },

    // Obtener estado del pago
    getEstado: async (preferenceId) => {
        const response = await api.get(`/api/public/pagos/estado/${preferenceId}`);
        return response.data;
    },
};

export default pagoService;