import api from '../../services/axiosConfig';

// Vehiculo Service - maneja solo la lógica de API
export const vehiculoService = {
    // Obtener todos los vehículos (admin)
    getAll: async () => {
        const response = await api.get('/api/admin/vehiculos');
        return response.data;
    },

    // Obtener vehículos disponibles (público)
    getDisponibles: async () => {
        const response = await api.get('/api/public/vehiculos/disponibles');
        return response.data;
    },

    // Crear nuevo vehículo (admin)
    create: async (data) => {
        const response = await api.post('/api/admin/vehiculos', data);
        return response.data;
    },

    // Actualizar vehículo (admin)
    update: async (id, data) => {
        const response = await api.put(`/api/admin/vehiculos/${id}`, data);
        return response.data;
    },

    // Eliminar vehículo (admin)
    delete: async (id) => {
        await api.delete(`/api/admin/vehiculos/${id}`);
    },
};

export default vehiculoService;